---
title: Hello World
published_at: "2022-08-04"
description: "Hello World"
draft: false
---

# h1

## h2

### h3

#### h4

##### h5

###### h6

## 強調

文章の一部を`**`で囲むと `<strong></strong>` により**強調**表示され、`*`で囲むと `<i></i>` により*斜体*になる。

## 箇条書き

- Emacs
  - GNU Emacs
  - GNU Emacs/Cocoa
  - Aquamacs Emacs
  - Emacs Mac Port
- Vim
  - Neovim
- Visual Studio Code

1. Emacs
   1. GNU Emacs
   1. GNU Emacs/Cocoa
   1. Aquamacs Emacs
   1. Emacs Mac Port
1. Vim
   1. Neovim
1. Visual Studio Code

## 引用

行頭に `>` を置くことで引用を示すことができる。

> Bad programmers worry about the code. Good programmers worry about data structures and their relationships.

入れ子についても対応する。

> 引用文の中に
>
> > また引用文を書くことも可能
>
> である。

## 区切り

---

## リンク

サイトトップへの[リンク](/)。

## テーブル

## コードブロック

```c
#include <stdio.h>

int main(int argc, char **argv) {
    printf("Hello, World\n");

    return 0;
}
```

## 数式

$f(x) = x^2 + 2x + 1$
