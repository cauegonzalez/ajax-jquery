<?php

$nome       = $_POST['nome'];
$email      = $_POST['email'];
$telefone   = $_POST['telefone'];
$assunto    = $_POST['assunto'];
$mensagem   = $_POST['mensagem'];

$textEnvio  = "Prezado {$nome},<br />";
$textEnvio .= "sua mensagem foi enviada com sucesso!<br />";
$textEnvio .= "<strong>Assunto:</strong> {$assunto}<br />";
$textEnvio .= "<strong>Mensagem:</strong> {$mensagem}<br />";
$textEnvio .= "<br />";
$textEnvio .= "Entraremos em contato através do telefone <strong>{$telefone}</strong><br />";
$textEnvio .= "ou do e-mail: <strong>{$email}</strong> para responder seu contato.<br />";
$textEnvio .= "<br />";
$textEnvio .= "Atenciosamente,<br />";
$textEnvio .= "Equipe do Suporte.";

$objetoResposta         = new StdClass();
$objetoResposta->msg    = $textEnvio;
$objetoResposta->action = true;
$objetoResposta->error  = '';

echo json_encode($objetoResposta);