<template>
    <div id='todos'>
        <ul v-sortable>
            <li v-bind:key='key' v-for='(todo, key, index) in list'>
                <label>
                    <input type='checkbox' v-model='todo.done'>
                    {{ todo.name }}  {{ todo.done ? '- Done' : '' }}
                    <button v-on:click='destroy(index)'>
                        Apagar
                    </button>
                </label>
            </li>
        </ul>

        <div id='newTodo'>
            <form v-on:submit='create()'>
                <input v-model='newTask.name'>
                <button>New</button>
            </form>
        </div>

        <hr>

        <p>{{msg}}</p>
        <button v-on:click='reversedMessage()'>Reverter Texto</button>
    </div>
</template>

<script>
    export default {
        name: 'todos',
        data(){
            return {
                newTask: {
                    name: ''
                },
                list: [
                    {
                        name: 'Tarefa 1',
                        done: false
                    },
                    {
                        name: 'Tarefa 2',
                        done: false
                    },
                    {
                        name: 'Tarefa 3',
                        done: false
                    },
                ],
                msg: 'Lorems Done'
            }
        },
        methods: {
            create(){
                this.list.push({ name: this.newTask.name, done: false });
                this.newTask.name = '';
            },
            destroy(indexOf){
                this.list.splice(indexOf, 1);
            },
            reversedMessage() {
                this.msg = this.msg.split('').reverse().join('');
            }
        }        
    };
</script>

<style>
    #todos > ul {
        user-select: none;
    }    
</style>

