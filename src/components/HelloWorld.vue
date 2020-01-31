<template>
    <div class="hello">
        {{date}}
        <h1>{{ msg }}</h1>
        {{der}}
    </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue, Watch } from 'vue-property-decorator'

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;

  private der: string = '1'
  private str: string = '2323'

  mounted (): void {
    console.log(2342)
    this.$on('emit-todo', function (n: any) {
      console.log(n)
    })

    this.$on('te', function (n: any) {
      console.log(111111111111111)
      console.log(n)
    })

    this.emitTodo('world')
    this.te()
  }

  get date () {
    console.log(new Date())
    return new Date()
  }

  @Emit()
  emitTodo (n: string): void {
    console.log('hello')
  }

  @Emit('te')

  te (): void {
    console.log(23)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
    margin: 40px 0 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>
