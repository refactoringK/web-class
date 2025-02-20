# position

HTML 요소를 배치하는 속성

- static  
  positon 속성의 기본값, 일반적인 흐름으로 배치
- relative  
  static과 동일하게 배치된다.  
  차이점은 현재 자신의 위치를 기준으로 배치를 수정할 수 있다.  
  `top`, `rigth`, `bottom`, `left` 속성을 사용한다.
- absolute  
  일반적인 흐름과 무관하게 배치할 수 있다.  
  `position : static` 이 아닌 부모요소를 기준으로 배치한다.  
  만약 조상 요소 중 `static`이 아닌 요소가 없다면 `body`를 기준으로 배치한다.
- fixed  
  브라우저 화면상으로 보이는 영역(viewport)에 고정되도록 배치한다.  
  즉, 스크롤을 하여도 고정된다.
- sticky  
  처음에는 일반적인 흐름에 배치되고 스크롤이 특정 위치에 도달하면 `fixed`처럼 화면에 고정된다.  
  **주의사항 : 부모요소에 height가 지정되어 있어야 작동한다.**

# Position과 관련된 속성

- z-index  
  요소가 배치될 때 겹치게 된다면 어떤 요소가 위로 올라올지 순서를 정하는 속성, 기본 값은 auto이며 지정하는 값은 1, 10, 100, -1, -100 등의 정수를 사용한다. 숫자가 높을 수록 요소가 위로올라오게 된다.  
  **주의사항 : position이 static이 아닌 요소에만 적용된다.**

# 고급 선택자

### 연결 선택자

1. 하위 선택자
   - `상위요소 하위요소 {}`
   - 상위요소에 포함된 모든 하위요소를 선택한다.
   - 자식을 포함한 모든 자손이 선택된다.
2. 자식 선택자
   - `부모요소 > 자식요소 {}`
   - 부모요소 바로 하위에 속한 자식 요소를 선택한다.
3. 인접 형제 선택자
   - `요소1 + 요소2 {}`
   - 요소1 직후에 나오는 형제 요소 1개를 선택한다.
4. 형제 선택자
   - `요소1 ~ 요소2 {}`
   - 요소1 이후에 나오는 모든 형제 요소를 선택한다.

### 속성 선택자

1. `선택자[속성]`
2. `선택자[속성=속성값]`

- 특정 속성을 가진 요소를 선택한다.

### 가상 선택자

1. 가상 클래스

   - `선택자:가상클래스 {}`
   - 실제 존재하는 요소의 특정 상태에 따라 css를 주고 싶을 때 사용
   - `link` : href속성을 가진 태그 중 아직 방문하지 않은 상태
   - `visited` : 이미 방문한 상태
   - `hover` : 사용자가 마우스를 올린 상태
   - `focus` : 입력 가능한 칸을 선택한 상태
   - `nth-child` : 형제 중 순서를 이용하여 선택함
   - `not(선택자)` : 해당 선택자를 제외하고 선택함

2. 가상 요소
   - `선택자::가상요소 {}`
   - 요소의 특정 부분에 스타일을 지정하거나 새로운 요소를 삽입하기 위해 사용한다.
   - `first-letter` : 첫 글자만 선택 (블록 요소에만 가능)
   - `first-line` : 첫 줄만 선택 (블록 요소에만 가능)
   - `before` : 선택한 요소의 컨텐츠 앞에 다른 요소 삽입
   - `after` : 선택한 요소의 컨텐츠 뒤에 다른 요소 삽입
