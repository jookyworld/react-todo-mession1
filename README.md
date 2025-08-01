## 리액트 투두 앱

<br>

## 개요

React를 사용해 구현한 ToDo List이다.<br>
React의 기본 골격이라고 할 수 있는 컴포넌트, 훅 등의 구조와 흐름을 이해하고 경험하는 데에 의의가 있다.<br>
<br>
주요 기능으로는 할일에 대한 추가, 삭제, 체크 등 관리를 제공하고, 원활한 사용 경험을 위해<br>
중복 등록 방지, 빈칸 등록 방지, 완료한 일에 대한 표기 등을 구현하였다.

<br>

## 기능 요약

|       기능        |                              설명                              |
| :---------------: | :------------------------------------------------------------: |
|       추가        |   입력 폼에 text 작성 후 추가 버튼을 누르면 할일이 등록된다    |
|       삭제        |       각 할일의 우측 삭제 버튼을 누르면 할일이 삭제된다        |
|     완료 체크     |        각 할일의 좌측 체크박스 체크 시 할일이 완료된다         |
|     빈칸 방지     |              입력 없이 추가를 누르면 alert로 제한              |
|     중복 방지     |     기등록된 할일을 동일하게 입력 후 추가 시 alert로 제한      |
|       독려        | 하단 완료/전체 할일을 명시하며 할일 처리를 위한 독려 멘트 제공 |
| localStorage 저장 |                 DB 없이 사용자별 todo현황 저장                 |

## 주요 패키지 구성

```
src/
├─components/
|  ├─TodoForm.jsx
|  ├─TodoItem.jsx
|  └─TodoList.jsx
├─hooks/
|  └─useTosos.js
├─utils/
|  └─storage.js
├─App.jsx
└─main.jsx
```

## 스크린샷

<img width="400" height="627" alt="1" src="https://github.com/user-attachments/assets/a09b6bbf-b51e-4c53-95d9-7863ec02f00b" /> <img width="400" height="627" alt="2" src="https://github.com/user-attachments/assets/895fb2a1-139c-496d-85e9-342aee5ad077" /> <img width="400" height="739" alt="3" src="https://github.com/user-attachments/assets/7617a4cb-e9e1-4572-91ae-b2bdb1bf623c" /> <img width="400" height="739" alt="4" src="https://github.com/user-attachments/assets/29d9bf13-d9aa-40ea-90f6-de2a14a8f165" />
