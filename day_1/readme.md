# 벨로퍼트와 함께하는 모던 자바스크립트


### spread

```
const slime = {
    name: '슬라임
};

const newSlime = {
    ...slime,
    attribute: 'cute
}

```

기존의 slime(프로토 객체를 이용하여)
새로운 newSlime을 생성, 이떄 사용 한 것이 spread 문법


### rest

```
const animals = ['개','고양이','참새];

const {first, ...rest} = numbers;

console.log(first); // 개
console.log(rest); // 고양이, 참새 
```


### scope

<ul>
<li>Global Scope
<li>Function Scope
<li>Block Scope
