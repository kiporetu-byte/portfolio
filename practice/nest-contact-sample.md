# NestJS contact API sample

Expressで実装した問い合わせAPIの構造理解のため、NestJSのController / Service / Module構成でも実装をお試し

※ 提出物のバックエンド本体は Express +TypeScript 

---

## フォルダ構成

src
├ main.ts
├ app.module.ts
├ prisma
│  ├ prisma.module.ts
│  └ prisma.service.ts
└ contact
   ├ contact.module.ts
   ├ contact.controller.ts
   └ contact.service.ts

---
## main.ts
アプリ起動

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(4000);
}
bootstrap();

Nest の起動は NestFactory.create(...) で始める。公式の First steps でも、Nest CLI で作ったプロジェクトを起動して基本構造を学ぶ流れになっている。

## app.module.ts

全体のまとめ

import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { ContactModule } from './contact/contact.module';

@Module({
  imports: [PrismaModule, ContactModule],
})
export class AppModule {}

Modules は Nest アプリの構成の基本単位で、imports, controllers, providers, exports を持てます。

## prisma/prisma.service.ts

Prisma を共通化する

import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {}

## prisma/prisma.module.ts

PrismaService を使えるようにする。

import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}

## contact/contact.controller.ts

URLを受ける担当

import { Body, Controller, Post } from '@nestjs/common';
import { ContactService } from './contact.service';

@Controller('contacts')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post()
  createContact(
    @Body() body: { name: string; email: string; message: string },
  ) {
    return this.contactService.createContact(body);
  }
}

Controllers は受信リクエストを処理し、ルーティングは decorator で定義します。

## ontact/contact.service.ts

DB保存の本体

import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ContactService {
  constructor(private readonly prisma: PrismaService) {}

  async createContact(data: {
    name: string;
    email: string;
    message: string;
  }) {
    return this.prisma.contact.create({
      data,
    });
  }
}

Providers/Services はロジック担当で、Nest の依存注入で controller から呼ばれます。

## contact/contact.module.ts

# contact機能をまとめる

import { Module } from '@nestjs/common';
import { ContactController } from './contact.controller';
import { ContactService } from './contact.service';

@Module({
  controllers: [ContactController],
  providers: [ContactService],
})
export class ContactModule {}

Express と比べると
Express
index.ts に全部書く
NestJS
controller: 入口
service: 処理
module: まとめ
何がうれしいか

NestJS は、

/profile

/profile/image

/contacts

と機能が増えてきたときに、どこに何があるか整理しやすいです。公式でも feature module で関連機能をまとめる構成を推しています。

実際にやってみるなら

いちばんおすすめは、今のExpressを壊さずに別フォルダでNest練習です。

たとえば

nest-contact-practice

みたいな別プロジェクトを作って、

POST /contacts

Prismaで保存

だけ作ると、Nestの感覚がかなり分かります。

公式では Nest CLI で新規作成する方法が案内されています。

npm i -g @nestjs/cli
nest new nest-contact-practice

認証 = ログインして本人確認
認可 = その人に権限があるか確認

Express = 速く作れる
NestJS = 整理しやすい
## Controller

```ts
@Controller("contacts")
export class ContactController {
  constructor(private contactService: ContactService) {}

  @Post()
  createContact(@Body() body: ContactDto) {
    return this.contactService.createContact(body);
  }
}