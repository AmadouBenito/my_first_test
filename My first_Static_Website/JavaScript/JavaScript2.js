/* Declaration des variables*/
// Les variables suvies de "valide" sont des booleen verifiant si le champ est correctement mis ou pas  
var mail_valide = false;
var mail_confirm_valide = false;
var password_valide= false;
var password_confirm_valide = false;
var civilite_valide = false;
var name_valide = false;
var lastname_valide = false;
// Ces variables sont utilisé dans le document HTML
var mail=document.getElementById('email_id');
var mail_confirm=document.getElementById('mail_confirm_id');
var password=document.getElementById('password_id');

function validerMail() {// Elle assure la validité du champs mail et demande a corriger si non valide
    if (mail_valide==true) {
        document.getElementById('email_id').style.border= 'none';
        document.getElementById('email_id').style.borderBottom= '1px solid green';                
        document.getElementById('mail_error').innerText = '';
    }else
        {
            emailError();// Fonction demandant a corriger car ya erreur dans le mail
        }
    if (mail_confirm_valide==true) {// Verification de la confarmité des deux mails et correction si besoin
            document.getElementById('mail_confirm_id').style.border= 'none';
            document.getElementById('mail_confirm_id').style.borderBottom= '1px solid green';                
            document.getElementById('mail_confirm_error').innerText = '';
    }else{ 
        if (document.getElementById('mail_confirm_id').value =='' ) {
            email_confirmVide();// Fonction demandant a corriger car ya erreur dans le mail de confirmation
        }else{
            mails_not_match(); // Fonction demandant a corriger car les deux mails non conformes (definie en bas)
        }
    }
}

function validerPassword() { // Elle assure la validité du champs Password et demande a corriger si non valide

    if (password_valide==true) {
        document.getElementById('password_id').style.border= 'none';
        document.getElementById('password_id').style.borderBottom= '1px solid green';                
        document.getElementById('password_error').innerText = '';
    }else
        {
            passwordError();// Fonction demandant a corriger car ya erreur dans le mot de passe
        }
}
function validerPassword_confirm() { // meme chose pour la confirmation du mot de passe
    if (password_confirm_valide==true) 
    {
        document.getElementById('password_confirm_id').style.border= 'none';
        document.getElementById('password_confirm_id').style.borderBottom= '1px solid green';                
        document.getElementById('password_confirm_error').innerText = '';
    }else{
            if (document.getElementById('password_confirm_id').value =='' ) 
            {
            password_confirmVide(); // Fonction demandant a corriger car ya erreur dans le mot de pass confimé
            }  else{
            passwords_not_match();// Fonction demandant a corriger car les deux motde pass non conformes (definie en bas)
            }
        }
}

function validerCivilite() { // meme chose pour la civilité
    if (civilite_valide==true) {
        document.getElementById('civilite_id').style.border= 'none';
        document.getElementById('civilite_id').style.borderBottom= '1px solid green';                        
        document.getElementById('civilite_error').innerText = '';
    }else
        {
            document.getElementById('civilite_id').style.border= '1px solid red';
            document.getElementById('civilite_error').innerText = 'Merci de choisir voter civilite';
            document.getElementById('civilite_error').style.fontWeight = '600';
            document.getElementById('civilite_error').style.fontStyle = 'italic';   
            document.getElementById('civilite_error').style.color = 'red';
        }
}

function validerName() {
    if (name_valide==true) {
        document.getElementById('name_id').style.border= 'none';
        document.getElementById('name_id').style.borderBottom= '1px solid green';                        
        document.getElementById('name_error').innerText = '';
    }else
        {
            document.getElementById('name_id').style.border= '1px solid red';
            document.getElementById('name_error').innerText = 'Merci de choisir voter prenom';
            document.getElementById('name_error').style.fontWeight = '600';
            document.getElementById('name_error').style.fontStyle = 'italic';   
            document.getElementById('name_error').style.color = 'red';
        }
}

function validerLastname() {
    if (lastname_valide==true) {
        document.getElementById('lastname_id').style.border= 'none';
        document.getElementById('lastname_id').style.borderBottom= '1px solid green';                        
        document.getElementById('lastname_error').innerText = '';
    }else{
            document.getElementById('lastname_id').style.border= '1px solid red';
            document.getElementById('lastname_error').innerText = 'Merci de choisir voter nom';
            document.getElementById('lastname_error').style.fontWeight = '600';
            document.getElementById('lastname_error').style.fontStyle = 'italic';   
            document.getElementById('lastname_error').style.color = 'red';
        }
}

/***** les fonctions demendant a corriger (utiisée en haut)  */

function emailError(){
            document.getElementById('email_id').style.border= '1px solid red';
            document.getElementById('mail_error').innerText = 'Merci de mettre votre mail';
            document.getElementById('mail_error').style.fontWeight = '600';
            document.getElementById('mail_error').style.fontStyle = 'italic';   
            document.getElementById('mail_error').style.color = 'red';
            return false;
}

function email_confirmVide()
{
            document.getElementById('mail_confirm_id').style.border= '1px solid red';
            document.getElementById('mail_confirm_error').innerText = 'Confirmer votre mail SVP';
            document.getElementById('mail_confirm_error').style.fontWeight = '600';
            document.getElementById('mail_confirm_error').style.fontStyle = 'italic';   
            document.getElementById('mail_confirm_error').style.color = 'red';
            return false;
}

function mails_not_match()
{
            document.getElementById('mail_confirm_id').style.border= '1px solid red';
            document.getElementById('mail_confirm_error').innerText = 'address mail non conforme a la premiere';
            document.getElementById('mail_confirm_error').style.fontWeight = '600';
            document.getElementById('mail_confirm_error').style.fontStyle = 'italic';   
            document.getElementById('mail_confirm_error').style.color = 'red';
            return false;
}

function passwordError()
{
            document.getElementById('password_id').style.border= '1px solid red';
            document.getElementById('password_error').innerText = 'Mettez un nombre au moins SVP';
            document.getElementById('password_error').style.fontWeight = '600';
            document.getElementById('password_error').style.fontStyle = 'italic';   
            document.getElementById('password_error').style.color = 'red';
            return false;
}

function password_confirmVide()
{
            document.getElementById('password_confirm_id').style.border= '1px solid red';
            document.getElementById('password_confirm_error').innerText = 'Confirmez votre password';
            document.getElementById('password_confirm_error').style.fontWeight = '600';
            document.getElementById('password_confirm_error').style.fontStyle = 'italic';   
            document.getElementById('password_confirm_error').style.color = 'red';
            return false;
}

function passwords_not_match()
{
            document.getElementById('password_confirm_id').style.border= '1px solid red';
            document.getElementById('password_confirm_error').innerText = 'mot de passe non conforme a la premiere';
            document.getElementById('password_confirm_error').style.fontWeight = '600';
            document.getElementById('password_confirm_error').style.fontStyle = 'italic';   
            document.getElementById('password_confirm_error').style.color = 'red';
            return false;
}

function civiliteError()
{
            document.getElementById('civilite_id').style.border= '1px solid red';
            document.getElementById('civilite_error').innerText = 'mettez voter civilite';
            document.getElementById('civilite_error').style.fontWeight = '600';
            document.getElementById('civilite_error').style.fontStyle = 'italic';   
            document.getElementById('civilite_error').style.color = 'red';
            return false;
}

function activeButton() // Fonction qui permet d'activer le bouton une fois tout correct
{
    if (mail_valide == true && mail_confirm_valide == true && password_valide == true && password_confirm_valide == true && civilite_valide == true && name_valide == true && lastname_valide == true){
        document.getElementById('button_id').style.background='#FD3D3B' ;
        document.getElementById('button_id').removeAttribute('disabled') ;
        
    }else{
        document.getElementById('button_id').setAttributeNodeNS('disable_button');
        return false;
    }
}