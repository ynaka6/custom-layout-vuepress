<template>
  <article class="post">
    <router-link class="post-thumbnail" :style="imageStyle" :to="item.link"></router-link>
    <div class="post-content">
      <h2 class="post-title"><router-link :to="item.link">{{ item.title }}</router-link></h2>
      <p>{{ item.description }}</p>
      <span class="post-date">{{ item.timestamp }}</span>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    item: {
      required: true
    }
  },
  computed: {
    imageStyle() {
      return `background-image: url('${this.item.image}');`
    }
  }
}
</script>

<style lang="stylus">
@import '../theme/styles/config.styl'
.post
  width: 100%
  margin-bottom: 1.5rem
  display: -webkit-box
  display: -webkit-flex
  display: -ms-flexbox
  display: flex
  -webkit-box-orient: horizontal
  -webkit-box-direction: normal
  -webkit-flex-direction: row
  -ms-flex-direction: row
  flex-direction: row
  -webkit-box-align: stretch
  -webkit-align-items: stretch
  -ms-flex-align: stretch
  align-items: stretch
  min-height: 11rem
  -webkit-border-radius: 10px
  border-radius: 10px
  overflow: hidden
  -webkit-transition: all .3s ease
  -o-transition: all .3s ease
  transition: all .3s ease
  -webkit-box-shadow: 0 1px 1px 0 rgba(31, 35, 46, 0.15)
  border: 1px solid #eaecef
  &:hover
    -webkit-transform translate(0px, -2px)
    -ms-transform translate(0px, -2px)
    transform translate(0px, -2px)
    -webkit-box-shadow 0 15px 45px -10px rgba(10, 16, 34, 0.2)
    box-shadow 0 15px 45px -10px rgba(10, 16, 34, 0.2)

  .post-thumbnail
    width: 30%
    max-width: 100%
    min-height: 11rem
    -webkit-background-size: cover
    background-size: cover
    background-position: 50% 50%

  .post-content
    padding: 1rem
    width: 70%
    .post-date, .post-words
      font-size: 12px
    .post-title
      margin: 0 0 10px
      font-size: 1.5rem;
      font-weight: 400
      a
        text-decoration: none
        color: #263959

    p
      margin-top: 0    
@media (max-width: $MQMobile)
  .post
    width: 47%
    max-width: 100%
    margin: 0 0.9% 1.5%
    -webkit-box-orient vertical
    -webkit-box-direction normal
    -webkit-flex-direction column
    -ms-flex-direction column
    flex-direction column
    .post-thumbnail
      width: 100%
    .post-content
      width: 88%;
      .post-title
        margin: 0 0 5px
        font-size: 1.2rem;
        a
        font-size: 21px
@media (max-width: $MQMobileNarrow)
  .post
    width: 100%
</style>

