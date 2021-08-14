<template>
    <div class="operations">
        <h3 class="section-heading">Operations</h3>
        <div class="operations-boxes">
            <div class="operation" v-for="operation in operations" :key="operation.heading">
                <div class="op-image">
                     <img :src="operation.icon" />
                </div>
                <div class="heading">
                    {{ operation.heading }}
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">

export default  {
  name: 'Operations',
  components: {
  },
  data: () => ({
      operations: [
          {
              icon: require('@/assets/apply.png'),
              heading: 'APPLY FOR LOAN'
          },
          {
              icon: require('@/assets/request.png'),
              heading: 'REQUEST'
          },
          {
              icon: require('@/assets/support.png'),
              heading: 'SUPPORT'
          },
          {
              icon: require('@/assets/repay.png'),
              heading: 'REPAY'
          }
      ]
  })
}
</script>
<style>
.operations {
    margin:20px 0;
}
.operations-boxes {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-right: -1%;
}

.operations-boxes .operation {
    width: auto;
    margin-bottom: 10px;
    font-size: 10px;
    line-height: 2;
    font-weight: 700;
    text-align: center;
    cursor: pointer;
    margin-right: 1%;
}

.op-image {
    background: #F5EFEF;
    padding: 13px;
    border-radius: 10px;
    line-height: 1;
    max-width: 50px;
    margin: 0 auto 8px;
}
</style>