<template>
    <div class="upcoming">
        <h3 class="section-heading">Upcoming</h3>
        <div class="square-bg">
            <div class="date">
                <span class="month">MAR</span>
                <span class="day">12</span>
            </div>
            <div class="desc">
                Next charge in 10 days
            </div>
            <div class="price">
                ₹3000
            </div>
        </div>
    </div>
</template>

<script lang="ts">

export default  {
  name: 'Upcoming',
  components: {
  },
  data: () => ({
  })
}
</script>
<style>
.upcoming {
    margin: 30px 0 20px;
}
.upcoming .square-bg {
    display: flex;
    align-items: center;
    position: relative;
    padding-right:100px;
    margin-bottom: 20px;
}
.upcoming .square-bg > div {
    margin-right:20px;
    font-weight: bold;
    font-size: 14px;
    line-height: 18px;
    color: #000000;
}

.upcoming .square-bg .date .month {
    font-weight: bold;
    font-size: 14px;
    line-height: 18px;
    color: #4A00E0;
    display: block;
}

.upcoming .square-bg .date {
    text-align: center;
}

.upcoming .square-bg .date span.day {
    font-size: 16px;
    line-height: 21px;
}
.upcoming .square-bg .price {
    position: absolute;
    right:30px;
    top: auto;
    bottom: auto;
    margin:auto 0;
    font-size: 18px;
}
</style>