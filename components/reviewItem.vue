<script>
export default {
  name: "reviewItem",
  props: {
    review: {
      name: String,
      role: String,
      message: String,
      avt: String,
    },
  },
};
</script>

<template>
  <div class="review-item">
    <span class="review-name">{{ review.name }}</span>
    <div class="review-row">
      <div class="review-role">{{ review.role }}</div>
      <div class="review-message">
        <div class="review__m">
          {{ review.message }}
        </div>
      </div>
      <div class="review-avt">
        <img :src="review.avt" alt="" />
      </div>
    </div>
  </div>
</template>

<style>
.review-item {
  background-image: linear-gradient(to right, black, #cf8e2e);
  width: 600px;
}

.review-name {
  color: rgba(0, 0, 0, 0.5);
  text-shadow: -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff,
    1px 1px 0 #fff;
}

.review-role {
  font-weight: 700;
    font-family: 'AvenirLTStd-Heavy.ttf';;
}

.review-role,
.review-message {
  background-image: linear-gradient(to right, #000, #cf8e2e);
  max-width: 340px;
  width: 340px;
  padding-left: 40px;
  margin-left: 0;
  margin-right: 0;
}

.review-message {
  margin-top: 72px;
  margin-bottom: 12px;
}
</style>
