with import <nixpkgs> {};
mkShell {
    buildInputs = [
        nodejs
        nodePackages.pnpm
    ];
}
