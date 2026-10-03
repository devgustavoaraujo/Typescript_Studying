#!/bin/bash

# Script de restauração automatizada de pacotes Snap
# Desenvolvido para facilitar a pós-formatação do Ubuntu

echo "=========================================================="
echo " Iniciando a instalação dos seus aplicativos Snap... "
echo "=========================================================="
echo "Por favor, digite sua senha de administrador (sudo) se solicitado."

# Atualiza o próprio gerenciador snapd primeiro
sudo snap install snapd

# Lista de aplicativos para instalar
# Nota: Runtimes e bases (como core, gnome, mesa) são instalados automaticamente como dependências,
# mas estão incluídos aqui para garantir que nada falte.

APPS=(
    "bare"
    "core22"
    "core24"
    "core26"
    "cups"
    "desktop-security-center"
    "firefox"
    "firmware-updater"
    "gnome-46-2404"
    "gtk-common-themes"
    "hwctl"
    "inkscape"
    "mesa-2404"
    "snap-store"
    "snapd-desktop-integration"
    "thunderbird"
)

for app in "${APPS[@]}"; do
    echo "----------------------------------------------------------"
    echo "Instalando: $app..."
    sudo snap install "$app"
done

# Instalações especiais (aplicativos que podem precisar de permissões clássicas de sistema)
echo "----------------------------------------------------------"
echo "Instalando aplicativos de produtividade..."
sudo snap install obsidian --classic 2>/dev/null || sudo snap install obsidian
sudo snap install prompting-client 2>/dev/null || sudo snap install prompting-client

echo "=========================================================="
echo " Processo concluído! Seus aplicativos foram instalados. "
echo "=========================================================="
read -p "Pressione [Enter] para fechar esta janela..."
