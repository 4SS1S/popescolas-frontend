import {
  MdHome,
  MdSearch,
  MdCreditCard,
  MdAdd,
  MdDashboard,
  MdClass,
  MdPersonAdd,
  MdPersonPin,
  MdExitToApp
} from "react-icons/md";

export default [
  {
    name: "Home",
    link: "/",
    icon: MdHome
  },
  {
    name: "Buscar",
    link: "/search",
    icon: MdSearch
  },
  {
    name: "Caixa",
    link: "/cashier",
    icon: MdCreditCard
  },
  {
    name: "Aluno",
    icon: MdDashboard,
    options: [
      {
        name: "Buscar Aluno",
        link: "/search-student",
        icon: MdSearch
      },
      {
        name: "Adicionar Aluno",
        link: "/add-student",
        icon: MdPersonAdd
      },
      {
        name: "Adicionar Responsavel",
        link: "/add-responsible"
      }
    ]
  },
  {
    name: "Turma",
    icon: MdClass,
    options: [
      {
        name: "Todas as turmas",
        link: "/all-classes",
        icon: MdSearch
      },
      {
        name: "Nova turma",
        link: "/new-class",
        icon: MdAdd
      }
    ]
  },
  {
    name: "Colaboradores",
    icon: MdPersonPin,
    options: [
      {
        name: "Procurar",
        link: "/search-contributors",
        icon: MdSearch
      },
      {
        name: "Todos colaboradores",
        link: "/all-contributors",
        icon: MdAdd
      },
      {
        name: "Adicionar contribuidor",
        link: "/add-contributors",
        icon: MdAdd
      }
    ]
  },
  {
    name: "Relatórios",
    icon: MdDashboard,
    options: [
      {
        name: "Relatório de matriculas",
        link: "/registration-report"
      },
      {
        name: "Relatório de colaborador",
        link: "/contributors-report"
      }
    ]
  },
  {
    name: "Sair",
    link: "/logout",
    icon: MdExitToApp
  }
];
