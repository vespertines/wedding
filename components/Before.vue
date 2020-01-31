<template>
  <div class="content-container">
    <section>
      <p class="subtitle">Invite you to share in the celebration of our marriage</p>
      <p>우리의 특별한 날 당신을 초대합니다</p>
      <p class="subtitle">
        at gurume resort, andong, South Korea
        <br />Saturday 16 May 2020
      </p>
      <p>
        안동 구름에 리조트
        <br />토요일 5월 16일 2020
      </p>
    </section>
    <!-- <section id="wedding">
      <h3 class="font-cursive">Wedding</h3>
      <p>Wedding Ceremony starts at 12AM and a lunch buffet will follow. Feel free to join our traditional Korean wedding ceremony, we will open the door!</p>
    </section>
    <section id="travel">
      <h3 class="font-cursive">Travel</h3>
      <p class="subtitle">Full Address</p>
      <p>745 Seonggok-dong Andong-si Gyeongsangbuk-do (190 Minsokchon-gil Andong-si Gyeongsangbuk-do Korea)</p>
      <p class="subtitle">Chartered Buses</p>
      <p>
        Seoul bus departs from Heawha station(Line 4) at 8AM
        <br />Busan bus departs from XX station at 8:30AM
        <br />Wonju bus departs from XX at 9:30 AM
      </p>
      <p class="subtitle">Public Transportation</p>
      <p>
        From Andong Train / Bus Station:
        <br />City bus 3 or Taxi (It would cost less than 15,000 won)
      </p>
      <p>* It would be gratefully appreciated if you could let us know what is your plan in advance</p>
    </section>
    <section>
      <h3 class="font-cursive">Accommodation</h3>
      <p>The guests who travel from abroad, if you would love to have an amazing Korean traditional house experience it will be great chance to stay at the resort. We invite you to Korean BBQ dinner as an after party which will be held at the resort so it would be convenience for you if you could stay overnight with us.</p>
      <p>
        The resort has a limited rooms so it will R.S.V.P.
        <br />Please let us know if you’d like know about more details.
      </p>
      <p>Otherwise here are more options of hotels in the city</p>
    </section>
    <section>
      <h3 class="font-cursive">What To Wear</h3>
      <p>Typical Korean wedding doesn’t really have a dress code but it will be nice to see you guys in smart casual or semi-formal dresses. Unless it’s raining we expect to have a lovely spring weather (Average temperature is 25° / 10° in May, Andong) but since it’s in mountain you would need to be careful with mosquitoes so we recommend you to have a long sleeves to cover you up at the evening time.</p>
      <p class="subtitle">For Your Information</p>
      <p>The Gureme resort has a rental service of Korean traditional costume if you’re interested in please let us know.</p>
    </section>-->
  </div>
</template>
<style lang="scss">
.content-container {
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
  max-width: 100%;
  width: 630px;
  text-align: center;

  &:last-of-type {
    padding-bottom: 400px;
  }

  section {
    padding-top: 60px;

    h3 {
      font-size: 30px;
    }

    h3 + p.subtitle {
      margin-top: 0;
    }

    p {
      font-family: "Nanum Myeongjo", serif;
      font-size: 20px;
      letter-spacing: 0.2em;
      line-height: 1.6;

      &.subtitle {
        margin-top: 30px;
        margin-bottom: 10px;
        letter-spacing: 1.4px;
        text-transform: uppercase;
      }
    }
  }
}
</style>
