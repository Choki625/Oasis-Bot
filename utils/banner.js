import chalk from 'chalk';

const art = `
 ============================================
|             Oasis Network Bot              |
|               Airdrop Vault                |
|         https://t.me/airdropvault_id       |
|             github.com/Choki625            |
 =============================================`;


export function centerText(text) {
    const lines = text.split('\n');
    const terminalWidth = process.stdout.columns || 80; 
    return lines
        .map(line => {
            const padding = Math.max((terminalWidth - line.length) / 2, 0);
            return ' '.repeat(padding) + line;
        })
        .join('\n');
}

export function showBanner() {
    console.log(chalk.green(centerText(art)));
}
