<template>
  <v-app>
	<router-view :totalNum="totalNum"></router-view>
	<v-footer fixed floating>
		<router-link to="/" style="text-decoration: none;">
			<v-btn color="blue lighten-2" dark @click="" icon><v-icon dark>edit</v-icon></v-btn>
		</router-link>
		<router-link to="/answer" style="text-decoration: none;">
			<v-btn color="red lighten-2" dark @click="" icon><v-icon dark>check</v-icon></v-btn>
		</router-link>

		<input v-model='totalNum' style='width:42px;'></input>→
		<v-btn @click='changeNum'>change num</v-btn>
	</v-footer>
  </v-app>
</template>

<script>
let cl=console.log;
import store from './store';

export default {
  name: 'App',
  components: {
  },
  data () {
    return {
		num:store.state.num,
		answers:store.state.answers,
		trueAnswers:store.state.trueAnswers,
		vagues:store.state.vagues,
		totalNum:200,
	  }
  },
  computed: {
    }, 
	created:function(){
	},
	watch:{
	},

   methods: {
		changeNum(){
			var num1=Number(this.totalNum);
			this.num=[...Array(num1).keys()].map(i => ++i);
			this.answers=new Array(num1).fill("answers");
			this.vagues=new Array(num1).fill(false);
			this.trueAnswers=new Array(num1).fill("trueAnswers");
			
			store.commit('updateNum',this.num);
			store.commit('updateTrueAnswers',this.trueAnswers);
			store.commit('updateVagues',this.vagues);
			store.commit('updateTrueAnswers',this.trueAnswers);
			cl(location.href)
			cl(typeof(location.href))
			location.href=location.href.replace(/answer/,'');
//			location.reload();
		},
    }
}

</script>


<style type="text/css">
.v-timeline-item__dot{
	z-index:1;
}
.edge{
	border-radius:0%;
	z-index:0;
}
.band{
  -webkit-transition: 0.5s;
  -moz-transition: 0.5s;
  -ms-transition: 0.5s;
  -o-transition: 0.5s;
  transition: 0.5s;
}
</style>
	