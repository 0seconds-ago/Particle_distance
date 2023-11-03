# Particle_distance

## 1. Distance

![image](https://github.com/0seconds-ago/Particle_distance/assets/123317581/642b9233-91dd-45bb-8835-d6da14e616d4)

마우스를 클릭하면 공이 생성되고 랜덤하게 움직인다
볼과 다른 볼의 거리에 따라 연결하는 선이 생성되고 변화한다

## 2. Force

![image](https://github.com/0seconds-ago/Particle_distance/assets/123317581/288a2660-2b31-42c5-82d4-530a8b87e1b7)

마우스를 누르고 있으면 공들이 화면 중앙으로 모인다

__문제점: 마우스를 누르다가 땠을때 가속도가 초기화 되지만 화면밖으로 나가버린다__

## 3. Balloon

![image](https://github.com/0seconds-ago/Particle_distance/assets/123317581/b0a733d1-b16f-4677-b4ed-19909645d20e)

클릭하면 생기고 날아 올라간다

마우스를 누르고 있으면 내려온다

## 4. Hanging Ball

![image](https://github.com/0seconds-ago/Particle_distance/assets/123317581/336f344d-4414-4027-827b-755827c80205)

클릭하면 생기고 올라간다

마우스를 누르고 있으면 내려온다

고무줄 같은 느낌쓰

천장과 바닥에 닿으면 튕긴다

속도에 따라 크기가 바뀐다

checkEdges 에서 한번씩 천장에 박혀서 끼어버린다
왤까?

```javascript
if (this.pos.y > height) {
        this.pos.y = height;
      } 

이걸 넣어도 빼도 동일한 문제가 발생한다 어째서
