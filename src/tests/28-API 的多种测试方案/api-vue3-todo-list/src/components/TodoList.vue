<template>
  <div>
    <h1>todo list</h1>
    <div>
      <input v-model="newTodo" @keypress.enter="handleAddTodo">
    </div>
    <div>
      <ul>
        <li v-for="todoItem in todoStore.todos" :key="todoItem.id">
          <TodoItem :id="todoItem.id" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { useTodoStore } from '../stores/todo'
  import TodoItem from './TodoItem.vue'

  const todoStore = useTodoStore()
  const newTodo = ref('')

  todoStore.updateTodoList()

  function handleAddTodo () {
    todoStore.addTodo(newTodo.value)
    newTodo.value = ''
  }
</script>

<style scoped></style>
