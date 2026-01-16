import { ref } from "vue";

interface Sphere {
  label: string;
  link: string;
}

const spheres = ref<Sphere[]>([
  {
    label: "Автоюрист",
    link: "/autolawyer",
  },
  {
    label: "Жилищное право",
    link: "/housing_law",
  },
  {
    label: "Защита прав потребителей",
    link: "/customer_law",
  },
  {
    label: "Земельное право",
    link: "/land_law",
  },
  {
    label: "Миграционное право",
    link: "/migration_law",
  },
  {
    label: "Наследство",
    link: "/inheritance_law",
  },
  {
    label: "Семейное право",
    link: "/family_law",
  },
  {
    label: "Трудовое право",
    link: "/labour_law",
  },
  {
    label: "Уголовное право",
    link: "/criminal_law",
  },
]);

export default spheres;
