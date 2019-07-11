<template>
<div>
	<v-container>
	<v-toolbar fixed dense floating inverted-scroll prominent tab><v-toolbar-title>{{totalValue}}/{{totalSelection}}</v-toolbar-title></v-toolbar>
		<div v-for="N in num">
			<div>
				No.{{N}}
				<v-icon v-if='trueAnswers[N-1]===answers[N-1]' color='green'>thumb_up</v-icon>
				<v-icon v-else color="red">thumb_down</v-icon>
				{{answersTime[N-1]}}
			</div>
			<v-layout row>
			<v-radio-group row v-model="trueAnswers[N-1]">
				<v-radio v-for='(x,i) of labels' color='red' :label="x" :value="x" @change='radio2(x,N)' :class='{underline:x===answers[N-1]}'></v-radio>
				<v-checkbox @change='vague(vagues[N-1],N)' v-model="vagues[N-1]" readonly></v-checkbox>
			</v-radio-group>
			</v-layout>
		</div>
	<v-btn @click='initTrueAnswers'>clear</v-btn>
	</v-container>
</div>
</template>

<script>
let cl=console.log;
import store from '../store';

// 21:26 2019/07/07 https://qiita.com/phi/items/3b10288b02c87057c006
var sum = function(arr, fn) {
    if (fn) {
        return sum(arr.map(fn));
    }
    else {
        return arr.reduce(function(prev, current, i, arr) {
                return prev+current;
        });
    }
};

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
		trueAnswers:store.state.trueAnswers,
		answersTime:store.state.answersTime,
		vagues:store.state.vagues,
	  }
  },
  computed: {
	  totalValue:function(){
		return sum(this.trueAnswers.map((x,i) =>{
			return Number(x===this.answers[i])
		}))
	  },
	  totalSelection:function(){
		return sum(this.trueAnswers.map((x,i) =>{
			return Number( x!="trueAnswers")
		}))
	  },
    }, 
	created:function(){
	},
	watch:{
	},

   methods: {
		radio2(x,N){
			this.trueAnswers.splice(N-1,1,x);
			store.commit('updateTrueAnswers',this.trueAnswers);
		},
		vague(x,N){
			this.vagues.splice(N-1,1,!x);
			store.commit('updateVagues',this.vagues);
		},
		initTrueAnswers(){
			cl(Number(this.totalNum))
			this.trueAnswers=new Array(Number(this.totalNum)).fill("trueAnswers");
			store.commit('updateTrueAnswers',this.trueAnswers);
		},
    }
}

</script>


<style type="text/css">
.underline{
	text-decoration: underline;
	color: rgba(0,0,0,0.87);
}

.band{
  -webkit-transition: 0.5s;
  -moz-transition: 0.5s;
  -ms-transition: 0.5s;
  -o-transition: 0.5s;
  transition: 0.5s;
}
</style>

