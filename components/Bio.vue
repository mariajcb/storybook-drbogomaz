<template lang="html">
  <div v-editable="blok" class="card">
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
            <h3>Education</h3>
              <p>I have been helping people on their life journey for 10+ years. After graduating from the Illinois School of Professional Psychology in 2012, I have been working for the University of North Florida Counseling Center. As Training Director, I supervise doctoral and master’s level internship programs with the goal of graduating competent and skillful clinicians who are passionate about helping others.</p>
              <p>As of 2017, I am one of the 5% of licensed psychologists who are board certified. In addition, I met the international requirements to become a Certified Group Psychotherapist. Being an expert in group psychology, I focus on the quality of relationships and its impact on mood and happiness.</p>
              <h3>Organizational Involvement</h3>
              I believe that every professional should strive to be directly involved in shaping the future of their chosen field. To have a voice, network, and learn about leadership, I serve as a board member of various organizations. I am a board member-at-large at the American Psychological Association’s (APA) Division 49 (Group Psychology), representing early career psychologists. I am a co-treasurer for the American Board of Group Psychology and serve as one of the examiners for psychologists seeking board certification in group psychology. I serve on the board of the International Board Certification of Group Psychotherapists. Every year, I direct a 12-hour training designed to fulfill education requirements for mental health professionals seeking to become certified as a group psychotherapist. Finally, I am on the committee of APA and Division Relations (CODAPAR), tasked with training the president-elects of new divisions, as well as reviewing grant submissions.
              <h3>Professional Presentations</h3>
              <p>To stay current in all of the new developments in psychology, I attend a number of conferences every year. Early on in my career, I was told that the best way to learn information is to teach it. To that end, I present every year for various organizations, such as the China Institute of Psychology, American Psychological Association annual conventions, American Group Psychotherapy annual meetings, and Jacksonville Naval Base.</p>
          </div>
          <button class="button is-medium">{{ blok.call_to_action_btn }}</button>
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

<style lang="css" scoped>
</style>
