function trim(val){
    let index = 0;
    for(let i of val){
        if(i !== ' ') {
            break;
        }
        index++;
    }
    return val.substr(index);
}
const App = {
    data(){
        return {
            _inputValue: '',
            items: [],
            isInputDisabled: true
        }
    },
    methods: {
        addItem(){
            if(this.isInputDisabled) return;
            this.items.push(this.inputValue);
            this.inputValue = "";
        },
        remove(item){
            const index = this.items.findIndex(i => i === item);
            if(index !== -1)
                this.items.splice(index,1);
        }
    },
    computed: {
        inputValue: {
            set(newVal){
                this._inputValue = trim(newVal);
            },
            get(){
                return this._inputValue;
            }
        }
    },
    watch: {
        inputValue(val){
            trim(val);
            console.log('inputValue change');
            this.isInputDisabled = val.length === 0;
        }
    }
}
Vue.createApp(App).mount('#app');