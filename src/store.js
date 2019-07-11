import Vue from '../node_modules/vue'
import Vuex from '../node_modules/vuex'
import createPersistedState from "../node_modules/vuex-persistedstate";

var cl=console.log;
Vue.use(Vuex);

const initialState = {
	num:[...Array(200).keys()].map(i => ++i),
	answers:new Array(200).fill("answers"),
	answersTime:new Array(200).fill(0),
	vagues:new Array(200).fill(false),
	trueAnswers:new Array(200).fill("trueAnswers"),
	
	answersBase:[],
	answersTimeBase:[],
	vaguesBase:[],
	trueAnswersBase:[],

}

export default new Vuex.Store({
	state: initialState,
	mutations: {
		updateNum(state,num){
			state.num=num;
		},
		updateAnswers(state,answers){
			state.answers=answers;
		},
		updateAnswersTime(state,answersTime){
			state.answersTime=answersTime;
		},
		updateVagues(state,vagues){
			state.vagues=vagues;
		},
		initVagues(state){
			state.vagues=initialState.vagues;
			cl(state.vagues)
		},
		updateTrueAnswers(state,trueAnswers){
			state.trueAnswers=trueAnswers;
		},

		createAnswersBase(state){
			state.AnswersBase.puch(initialState.answers);
		},
		AddAnswersBase(state,Answers){
			state.AnswersBase.puch(Answers);
		},
		deleteAnswersBase(state,i){
			state.AnswersBase.splice(i,1);
		},
		updateAnswersBase(state,i,Answers){
			state.AnswersBase.splice(i,1,Answers);
		},


/* 		updaterecentoutput(state,newRecentoutput){
			state.recentoutput=base.uniq(newRecentoutput);
			var xx={
				data:newRecentoutput.filter(Boolean),
				name:initialState.recentoutput_ID,
			};
			const docRef = db.collection(initialState.dbname).doc(initialState.recentoutput_ID);
			docRef.set(xx, {merge: true});
		},
 */
	},
	actions: {},
	getters: {},
	plugins: [createPersistedState({key: 'vuetify'})]
});
