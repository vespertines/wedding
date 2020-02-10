<template>
  <div class="container">
    <div class="row">
      <div class="col-6 contents timetable">
        <h3>Timetable</h3>
        <table>
          <tr>
            <td>1:30 pm</td>
            <td>Arrival</td>
          </tr>
          <tr>
            <td>2:30 pm</td>
            <td>Wedding Ceremony</td>
          </tr>
          <tr>
            <td>3:10 pm</td>
            <td>Photos</td>
          </tr>
          <tr>
            <td>3:30 pm</td>
            <td>Drinks & Buffet Reception</td>
          </tr>
          <tr>
            <td>5:30 pm</td>
            <td>The Chartered Buses Leave</td>
          </tr>
          <tr>
            <td>6:00 pm</td>
            <td>Break Time</td>
          </tr>
          <tr>
            <td>7:00 pm</td>
            <td>After Party</td>
          </tr>
          <tr>
            <td>10:00 pm</td>
            <td>Farewell</td>
          </tr>
        </table>
      </div>

      <div class="col-6 contents">
        <h3>Travel</h3>
        <p>
          The full address is
          <a
            v-bind:href="'https://www.google.com/maps/place/745+Seonggok-dong,+Andong,+Gyeongsangbuk-do,+South+Korea/@36.5712433,128.7664382,17.78z/data=!4m5!3m4!1s0x3566a4662add4af7:0x5a214cf8fcfcbb53!8m2!3d36.5716411!4d128.7683522'"
            target="_blank"
          >745 Seonggok-dong, Andong-si, Gyeongsangbuk-do</a> or
          <a
            v-bind:href="'https://www.google.com/maps/place/190+Minsokchon-gil,+Yongsang-dong,+Andong,+Gyeongsangbuk-do,+South+Korea/@36.5716411,128.767082,17z/data=!3m1!4b1!4m5!3m4!1s0x3566a4662add4af7:0xe93771b383fb734a!8m2!3d36.5716411!4d128.7683522'"
            target="_blank"
          >190 Minsokchon-gil, Andong-si, Gyeongsangbuk-do</a>.
        </p>
        <p>
          There will be a chartered bus from Seoul in the morning
          (around 9am). We will share the exact times and location a month before
          the wedding. Please keep a watch out for further instructions.
        </p>
        <p>
          Also if you would like to take public transportation and take off from
          Andong train / bus station, there is a city bus 3 or take a taxi and the
          ticket should cost less than 15,000 won.
        </p>
        <p>
          We recommend you to use Naver map (mobile) rather than Google map.
          <a
            v-bind:href="'https://www.blakeerik.com/blog/2019/8/30/kakaomap-vs-naver-map-which-app-is-best-to-use-for-south-korea/'"
            target="_blank"
          >
            Read
            an article.
          </a>
        </p>
      </div>
    </div>

    <div class="row">
      <div class="col-6 contents">
        <h3>What to Wear</h3>
        <p>Typically, Korean weddings do not have dress codes but we would like to request smart-casual or semi-formal attire.</p>
        <p>Unless there is rain, we expect to have lovely spring climate (Average temperature in May is 10°–25° in Andong) but as the venue is in the mountain, you should be aware that there are mosquitoes; we recommend bringing long sleeves for the evening.</p>
        <p>For your information, the resort offers Korean traditional attire rental service. If this interests you, please let us know.</p>
      </div>

      <div class="col-6 contents">
        <h3>Accommodation</h3>
        <p>
          For guests travelling in, if you would like to enjoy traditional Korean
          accommodations, we recommend you to stay at
          <a
            v-bind:href="'http://www.gurume-andong.com/svc/'"
            target="_blank"
          >Gurume Resort</a> with us. The
          resort has limited rooms so R.S.V.P. Let us know via
          <a
            v-bind:href="'mailto:lee.nayeon90@gmail.com, atelier.jullian@gmail.com'"
          >email</a> if you
          require additional details.
        </p>
        <p>
          Otherwise
          <a
            v-bind:href="'http://www.andonggrandhotel.com/eng/'"
            target="_blank"
          >Andong Grand Hotel</a> or
          <a v-bind:href="'http://richell-andong.co.kr/eng/'" target="_blank">Richell Hotel</a> are alternative
          accommodations.
        </p>
        <p>Feel free to send an email if you need any help booking accommodations.</p>
      </div>
    </div>

    <div class="row">
      <div class="col-6 contents">
        <h3>Jeju Island</h3>
        <p>We’re planning to go to Jeju Island for a few days to chill and relax after the wedding (17 - 21 May). There are a few flight departing from Gimhae airport. It would be great if you would join us there!</p>
        <p>It is a very beautiful island with a unique and special culture. We highly recommend a visit there while you’re in South Korea.</p>
        <p>
          If it becomes a group we suggest to stay
          <a
            v-bind:href="'http://paulstay.co.kr/'"
            target="_blank"
          >here</a>
          (7-10 Max / up to £370 per day) but if it becomes a larger number we can find other places or happy to have an accommodation separately.
          <a
            v-bind:href="'https://www.stayfolio.com/picks?page=1&city=%ED%95%9C%EA%B5%AD%252F%EC%A0%9C%EC%A3%BC'"
          >Visit here.</a>
        </p>
        <p>Depending on the number of people, we can plan how to get to the airport together.</p>
      </div>

      <div class="col-6 contents">
        <h3>Car Parking</h3>
        <p>
          Car parking is available at the venue and cars can be left at the venue
          overnight.
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$white: #ffffff;
$black: #000000;
$grey: #505050;
$grey-light: #7e7e7e;

.contents {
  padding-bottom: 90px;

  h3 {
    margin-bottom: 20px;
    color: $black;
    font-size: 15px;
    font-weight: normal;
    line-height: 1em;
  }

  p {
    margin-bottom: 1em;
    color: $grey-light;
    font-size: 15px;
    line-height: 1.5;

    a {
      color: $black;
    }
  }
}

.timetable {
  tr {
    td {
      font-size: 15px;
      line-height: 1.5;

      &:nth-of-type(1) {
        width: 100px;
        color: $black;
      }

      &:nth-of-type(2) {
        width: calc(100% - 100px);
        color: $grey-light;
      }
    }
  }
}
</style>
