# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project status

This repository is currently empty — no code, framework, or tooling has been added yet. The sections below (commands, architecture) should be filled in once the tech stack is chosen. Until then, this file only defines the Git workflow rule for this project.

## Git ワークフロー(重要)

このプロジェクトでは、コードに変更を加えるたびに GitHub へ push すること。

- ファイルの追加・編集・削除などコードに変更があったら、作業の区切りごとにコミットし、リモート(GitHub)へ push する。
- 変更を溜め込んで一度に大きなコミットにしない。意味のある単位でこまめにコミット・push する。
- push 前に `git status` で意図しない変更(不要なファイル、シークレットなど)が含まれていないか確認する。
- リモートリポジトリはまだ作成されていない。最初にコードを書く前に、`git init` の実行と GitHub リポジトリの作成・`git remote add origin <URL>` の設定が必要。
- force push (`git push --force`) など破壊的な操作は、明示的な指示がない限り行わない。
