function test_champ(champ) {
    expr_reg = /^\d*$/ ;
    // Ci-dessus : expression régulière qui match 0,1 ou plusieurs chiffres ;
    // de cette façon on vérifie que l'utilisateur entre bien un nombre entier
    if ( expr_reg.test(champ.value) ) {
      // c'est bien un nombre entier
      return true;
    } else {
      // ce n'est pas un nombre entier
      alert ("Ce n'est par un nombre entier !") ;
      document.form1.elements[champ.name].value = "" ;   // on efface la valeur entrée erronée
      calcul_form() ;
    }
  }
  
  function calcul_form() {
    // le with ci-dessous permet d'abréger "document.forms.form1.p1.value" en "p1.value"
    with (document.forms.form1) {

    p1.value = q1.value * pu1.value ;
    p2.value = q2.value * pu2.value ;
    p3.value = q3.value * pu3.value ;
    total.value = p1.value *1 + p2.value *1 + p3.value *1 ;
        // Ai mis les *1 ci-dessus afin que les + fassent une somme arithmétique
        // et non pas une concaténation de chaînes de caractères
    }
  }

  function champ_verrouille(champ,valeur) {
         // Remarque : en HTML 4.0, il existe un attribut "read-only" pour la
         //            balise <INPUT TYPE=text> qui interdira de modifier un champ
         //            mais ce que je fais ci-dessous est beaucoup plus sûr !!!
    // alert ("Ce champ de peut pas être modifié !") ;

    

    document.form1.elements[champ.name].value = valeur;   // on remet "valeur" initiale dans champ

  }
  
  function total() {
    if ( document.forms.form1.total.value == 0 ) {
      alert ("Vous n'avez rien commandé !\n => commande non soumise") ;
      return false ;
    } else {
      calcul_form() ;
    }
      
      return true ;
    }
  
  function soumettre_form() {
    if ( document.forms.form1.total.value == 0 ) {
      alert ("Vous n'avez rien commandé !\n => commande non soumise") ;
      return false ;
    } else {
      // Choisir l'une ou l'autre (mais pas les deux) des solutions ci-dessous
      
      // A) Envoi par Email
      // document.form1.method = "POST" ;
      // document.form1.action = "http://enacit1.epfl.ch/cgi-bin/mail_form.pl?mailto=Jean-Daniel.Bonjour@epfl.ch" ;
      // document.form1.submit() ;

      // B) Affichage dans page web
      document.write ("<div style='display: flex; justify-content: center; background: #98FB98; padding: 5px 12px; margin: 50px 100px; border: solid 1px #000; border-radius: 10px'><H3 style='text-align: center; font-size: 34px; font-weight: lighter; padding: 5px 12px;'>Félicitations votre commande pour un montant total de " + document.forms.form1.total.value + " € a bien été prise en compte !</H3></div><div style='display: flex; justify-content: center;'><a href='javascript:history.go(0)' style='text-decoration: none; text-align: center; background: rgb(106, 106, 253); padding: 5px 12px; color: #FFF; border-radius: 10px'>Retour</a></div>") ;
      document.close () ;
      
      return true ;
    }
  }