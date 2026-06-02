import Swal from "sweetalert2";
import "./alerta.css";

export const alerta = ({ 
  title, 
  text, 
  icon,
  showCancelButton = null,
  confirmButtonText = null,
  cancelButtonText = null,
  confirmButtonColor = "#3085d6",
  cancelButtonColor = "#d33",
}) => {
  return Swal.fire({
    title: title,
    text: text,
    icon: icon,
    showCancelButton: showCancelButton != null ? showCancelButton : undefined,
    confirmButtonText: confirmButtonText != null ? confirmButtonText : undefined,
    cancelButtonText: cancelButtonText != null ? cancelButtonText : undefined,
    confirmButtonColor,
    cancelButtonColor
  });
};

// VERSÃO NORMAL
// Swal.fire({
//   title: "Cadastro de Gênero",
//   text: "Erro ao chamar a API",
//   icon: "error",
// });

// VERSÃO COM 2 BOTÕES E RETORNO

// const result = await Swal.fire({
//   title: "Cadastro de Gênero",
//   text: `Deseja realmente apagar ${item.nome} ?`,
//   icon: "warning",
//   showCancelButton: true,
//   confirmButtonColor: "#3085d6",
//   cancelButtonColor: "#d33",
//   confirmButtonText: "Confirmar Exclusão",
//   cancelButtonText: "Cancelar",
// });

// // Clicou no botão cancelar
// if (!result.isConfirmed) {
//   return false;
// }