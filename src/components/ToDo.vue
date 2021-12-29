<template>
  <!-- component -->
  <div class="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
    <div class="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
      <div class="mb-4">
        <h1 class="text-grey-darkest text-center text-2xl">Todo List</h1>
        <div class="flex mt-4">
          <input id="input-area" class="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker" placeholder="Add Todo" v-model="task" @keyup.enter="submitTask">
          <button id="add-button" class="flex-no-shrink p-2 border-2 rounded text-green-400 border-green-400 hover:text-white hover:bg-green-400" @click="submitTask">Add</button>
        </div>
      </div>
      <div v-for="(item,index) in tasks" :key="index">
        <div class="flex mb-4 items-center" v-show="tasks.length>0">
          <p :id="'task-'+index" class="w-full text-grey-darkest" :class="{'line-through' : item.status==='Done'}">{{ item.name }}</p>
          <button :id="'edit-button-'+index" class="flex-no-shrink p-2 ml-2 border-2 rounded text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white" @click="editTask(index)">Edit</button>
          <button :id="'status-button-'+index" class="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded bg-yellow-500 border-yellow-500 text-white" :class="{'bg-green-500 border-green-500 text-white' : item.status === 'Done'}" @click="changeStatus(index)">
            {{ item.status }}</button>
          <button :id="'remove-button-'+index" class="flex-no-shrink p-2 ml-2 border-2 rounded text-red-500 border-red-500 hover:bg-red-500 hover:text-white" @click="deleteTask(index)">Remove</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ToDo',
  data() {
    return{
      task:'',
      tasks:[],
      editedTask:null,
      status:['Todo','Done'],
      doneButton:['text-white','bg-green-500','border-green-500']
    }
  },
  methods: {
    submitTask() {
      if(this.task.length === 0) return;

      if(this.editedTask === null) {
        this.tasks.push({
          name: this.task,
          status: "Todo",
        })
      }else{
        this.tasks[this.editedTask].name = this.task;
        this.editedTask = null;
      }
      this.task = ""
    },
    changeStatus(index) {
      let newIndex = this.status.indexOf(this.tasks[index].status);
      if(++newIndex > 1) newIndex = 0;
      this.tasks[index].status = this.status[newIndex];
    },
    editTask(index) {
      this.task = this.tasks[index].name;
      this.editedTask=index;
    },
    deleteTask(index){
      this.tasks.splice(index,1);
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
