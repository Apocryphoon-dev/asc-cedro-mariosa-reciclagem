// ==========================================
// FLAG DE CONTROLE DO SITE
// ==========================================
// Para REATIVAR o site: mude para false e faça o deploy.
// Para SUSPENDER o site: mude para true e faça o deploy.

const SITE_BLOQUEADO = true;

(function () {
    if (SITE_BLOQUEADO) {
        window.location.replace('/suspenso.html');
    }
})();
