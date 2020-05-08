<template lang="html">
  <div v-editable="blok" class="card bio">
    <div class="card-image is-hidden-tablet">
      <figure class="image is-225X255">
        <img :src="blok.image_mobile" :alt="blok.image_mobile.description">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-left is-hidden-touch">
          <figure class="image is-400X600">
            <img :src="blok.image" :alt="blok.image.description">
          </figure>
        </div>
        <div class="media-content">
          <div class="content">
            <h3 class="title is-marginless">Education</h3>
            <p class="has-text-weight-semibold">Expert in group psychology, focusing on the quality of relationships and its impact on mood and happiness</p>
              <ul>
                <li>Graduated from the Illinois School of Professional Psychology in 2012</li>
                <li>Training Director for the University of North Florida Counseling Center</li>
                <li>One of the 5% of licensed psychologists who are board certified</li>
                <li>Internationally Certified Group Psychotherapist</li>
              </ul>
            <h3 class="title is-marginless">Organizational Involvement</h3>
            <p class="has-text-weight-semibold">Every professional should strive to be directly involved in shaping the future of their chosen field</p>
              <ul>
                <li>Board member-at-large at the American Psychological Association’s (APA) Division 49 (Group Psychology)</li>
                <li>Co-treasurer for the American Board of Group Psychology</li>
                <li>Examiner for psychologists seeking board certification in group psychology</li>
                <li>Member of the board of the International Board Certification of Group Psychotherapists</li>
                <li>Member of Committee of APA and Division Relations (CODAPAR), tasked with training the president-elects of new divisions, as well as reviewing grant submissions</li>
              </ul>
            <h3 class="title is-marginless">Professional Presentations</h3>
              <p class="has-text-weight-semibold">The best way to learn information is to teach it</p>
              <ul>
                <li>China Institute of Psychology</li>
                <li>American Psychological Association</li>
                <li>American Group Psychotherapy Association</li>
                <li>Jacksonville Naval Base</li>
              </ul>
          </div>
          <nuxt-link class="button is-medium" to="/contact">{{ blok.call_to_action_btn }}</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['blok']
}
</script>

<style lang="scss" scoped>
p {
  margin-top: .2rem;
}

.button {
  background-color: #718FCB;
  margin-top: auto;
  color: #ffffff;
  &:hover {
    background-color: #ffffff;
    color: #718FCB;
  }
}
</style>
