export async function sendContactMessage(data: { name: string; email: string; subject: string; message: string }) {
  await new Promise((resolve) => setTimeout(resolve, 650));
  const destination = "carlosgarzon969@gmail.com";
  const body = `Nombre: ${data.name}\nCorreo: ${data.email}\n\n${data.message}`;
  window.location.href = `mailto:${destination}?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(body)}`;
  return { success: true, message: "Se abrió tu cliente de correo para completar el envío." };
}
