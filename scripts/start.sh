#!/bin/bash
npm update
npm install
npm audit fix
npm run build
npm run test
