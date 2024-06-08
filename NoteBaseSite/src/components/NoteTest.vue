<template>
  <div class="hello">
    <h1>Made By Getters</h1>
    <div v-for="note in getNotes" :key="note.id">
      {{ note.id }} {{ note.title }}
    </div>
    <hr>
    <h1>Made By Actions</h1>
    <div v-for="note in notes" :key="note.id">
      {{ note.id }} {{ note.title }} {{ note.text }} {{ note.personId }}
      <div v-for="tag in note.tagList" :key="tag.id">
          {{ tag.id }} {{ tag.title }}
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { useNoteStore } from "../stores/NoteStore";
const store = useNoteStore();
const getNotes = computed(() => {
  return store.getNotes;
});
const notes = computed(() => {
  return store.notes;
});
onMounted(async () => {
  await store.fetchNotes('79ecc113-5ccc-4f7d-83cf-49cd121d8751');
});
</script>