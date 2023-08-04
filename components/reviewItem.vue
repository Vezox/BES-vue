<script>
export default {
  name: "reviewItem",
  props: {
    idx: Number,
  },
};
</script>

<template>
  <img
    :src="`/images/review/${idx}.jpg`"
    alt="BES cộng đồng học tiếng anh cho doanh nhân Việt Nam"
    style="border-radius: 20px; width: 88%"
  />
</template>

<style>
.review-item {
  background-image: linear-gradient(to right, black, #cf8e2e);
  width: 620px;
  height: 380px;
  font-size: 14px;
}

.review-name {
  color: #000;
  text-shadow: -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff,
    1px 1px 0 #fff;
}

.review-role {
  font-weight: 700;
  font-family: "AvenirLTStd-Heavy.ttf";
  padding-right: 1.7em;
}

.review-role,
.review-message {
  background-image: linear-gradient(to right, #000, #cf8e2e);
  max-width: 26em;
  width: 26em;
  padding-left: 2.8em;
  margin-left: 0;
  margin-right: 0;
  font-size: 1em;
  line-height: 1.6;
}

.review-avt {
  width: 17em;
  height: 17em;
}

.review-message {
  margin-top: 5em;
  margin-bottom: 0.85em;
}

@media screen and (max-width: 1400px) and (min-width: 1160px) {
  .review-item {
    font-size: 12px;
    width: 520px;
    height: 320px;
  }
}

@media screen and (max-width: 1160px) and (min-width: 1024px) {
  .review-item {
    font-size: 11px;
    width: 470px;
    height: 290px;
  }
}

@media screen and (max-width: 740px) and (min-width: 0px) {
  .review-item {
    font-size: 11px;
    width: 240px;
    height: 360px;
  }

  .review-name {
    font-size: 1.6em;
  }

  .review-role,
  .review-message {
    background-image: linear-gradient(to right, #000, #cf8e2e);
    max-width: 13em;
    width: 13em;
    padding-left: 2em;
    margin-left: 0;
    margin-right: 0;
    font-size: 1em;
    line-height: 1.6;
  }

  .review-role {
    padding-right: 1em;
  }

  .review-avt {
    padding: 0;
  }

  .review-message {
    margin-top: 8em;
  }

  .review-avt {
    width: 8em;
    height: 8em;
  }
}
</style>
