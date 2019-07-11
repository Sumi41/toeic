<template>
	<v-container fluid>
		<div v-for="N in num">
		<div>No.{{N}}</div>
			<v-layout row>
			<v-radio-group row v-model="answers[N-1]">
				<v-radio v-for='(x,i) of labels' :label="x" :value="x" @change='radio(x,N)'></v-radio>
				<v-checkbox @change='vague(vagues[N-1],N)' v-model="vagues[N-1]"></v-checkbox>
			</v-radio-group>
			</v-layout>
		</div>
	<v-btn @click='initAnswers'>clear</v-btn>
	</v-container>
</template>

<script>
let cl=console.log;
import store from '../store';

export default {
  name: 'Sheet',
  components: {
  },
  props:{
	  totalNum:String,
  },
  data () {
    return {
		labels:['A','B','C','D'],
		num:store.state.num,
		answers:store.state.answers,
		answersTime:store.state.answersTime,
		vagues:store.state.vagues,
	  }
  },
  computed: {
    }, 
	created:function(){
//		store.commit("initVagues");
	},
	watch:{
	},

   methods: {
		radio(x,N){
			this.answers.splice(N-1,1,x);
			store.commit('updateAnswers',this.answers);

			this.answersTime.splice(N-1,1,new Date().valueOf());
			store.commit('updateAnswersTime',this.answersTime);
		},
		vague(x,N){
			this.vagues.splice(N-1,1,x);
			store.commit('updateVagues',this.vagues);
		},
		initAnswers(){
			this.answers=new Array(Number(this.totalNum)).fill("answers");
			store.commit('updateAnswers',this.answers);
		},
	}
}
</script>

