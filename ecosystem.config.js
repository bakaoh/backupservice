module.exports = {
  apps: [
    {
      name: "keybackup",
      script: "src/index.js",
      instances: 1,
      autorestart: true,
      max_memory_restart: "2000M",
      watch: false,
      time: true,
      env: {
        "PORT": 9193,
        "BACKUP_PATH": "backup",
      }
    },
    {
      name: "keybackup-testnet",
      script: "src/index.js",
      instances: 1,
      autorestart: true,
      max_memory_restart: "2000M",
      watch: false,
      time: true,
      env: {
        "TESTNET": true,
        "PORT": 9293,
        "BACKUP_PATH": "backup_testnet",
      }
    }
  ]
};