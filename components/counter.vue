<template>
    <!--************Counter****************-->

    <div class="counter-section pb-135 pt-135">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-4 col-sm-4">
            <div class="counter-single--item">
              <div class="icon">
                <img src="/assets/img/counterup-icon-1.png" alt="">
              </div>
              <div class="content">
                <h2 class="number">
                  <span>
                    {{ statisticCount.happy_clients }}
                  </span>+
                </h2>
                <span class="text">Happy Clients</span>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-4">
            <div class="counter-single--item">
              <div class="icon">
                <img src="/assets/img/counterup-icon-2.png" alt="">
              </div>
              <div class="content">
                <h2 class="number">
                  <span>
                    {{ statisticCount.project_complete }}
                  </span>K
                </h2>
                <span class="text">Project Complete</span>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-4">
            <div class="counter-single--item">
              <div class="icon">
                <img src="/assets/img/counterup-icon-3.png" alt="">
              </div>
              <div class="content">
                <h2 class="number">
                  <span>
                    {{ statisticCount.years_of_experience }}
                  </span>+
                </h2>
                <span class="text">Years Of Experience</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      statisticCount: [],
    };
  },
  methods: {
    async getStatisticsCount() {
      const res = await this.callApi("get", "/api/statistics_count");
      if(res.status == 200) {
        this.statisticCount =  res.data[0] ;
        console.log(this.statisticCount);
      };
    },     
  },

  async created() {
    this.getStatisticsCount();
  },

};
</script>