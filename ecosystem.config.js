module.exports = {
  apps: [
    {
      name: "backupservice",
      script: "src/index.js",
      instances: 1,
      autorestart: true,
      max_memory_restart: "2000M",
      watch: false,
      time: true
    }
  ]
};