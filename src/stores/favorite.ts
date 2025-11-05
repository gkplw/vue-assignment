// TODO1: สร้าง store ชื่อ useFavoriteStore
// state:
//   username (string)
//   favorites (array)
// actions:
//   setUsername(name) → เก็บชื่อผู้ใช้
//   addFavorite(course) → เพิ่มคอร์สใน favorites
import { defineStore } from "pinia";

export const useFavoriteStore = defineStore("favorite", {
  state: () => ({
    username: "",
    favorites: [] as any[],
  }),
  actions: {
    setUsername(name: string) {
      this.username = name;
    },
    addFavorite(course: any) {
      this.favorites.push(course);
    },
  },
});