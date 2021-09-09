#!/bin/bash
DATE=$(date +%F)

function gqlgen() {
npx genql --endpoint "$@" --output ./$DATE
}
