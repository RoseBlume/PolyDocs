#!/bin/bash

# Define the frameworks to generate pages for
frameworks=("Blazor" "Dioxus" "Leptos" "SolidJS" "Svelte" "Vue" "Yew" "React")
 
# Define the pages for each framework (use '|' as a delimiter)
declare -A framework_pages
framework_pages["Blazor"]="Introduction|Installation|Project Setup|Component Lifecycle|Data Binding|Forms & Validation|Services & Dependency Injection|Interop with JS|Error Handling|Deployment"
framework_pages["Dioxus"]="Overview|Installation|Functional Components|State & Hooks|Routing Basics|Handling Events|Styling Approaches|Data Fetching|Testing Strategies|Deployment"
framework_pages["Leptos"]="Getting Started|Installation|Project Structure|Templating|State Management|Async Data|Routing|Styling Methods|Optimization Tips|Deployment"
framework_pages["React"]="Introduction|Installation|JSX & Components|State & Props|Lifecycle Methods|Hooks|Context API|Routing|Performance Optimization|Deployment"
framework_pages["SolidJS"]="Introduction|Installation|Signal & Effect|Control Flow|State & Props|Context API|Routing|Async Data|Testing & Debugging|Deployment"
framework_pages["Svelte"]="Introduction|Installation|Reactivity|Components & Props|Events & Bindings|Stores|Animations|Routing|Performance Tips|Deployment"
framework_pages["Vue"]="Introduction|Installation|Reactivity System|Single File Components|Directives & Events|Vuex/Pinia|Routing|Composition API|Testing|Deployment"
framework_pages["Yew"]="Introduction|Installation|Project Configuration|Macros & JSX|State & Props|Effects & Hooks|Routing|Integration with Rust|Performance Tips|Deployment"

# Loop over each framework
for fw in "${frameworks[@]}"; do
    # Create a directory for the framework (if it doesn't exist)
    mkdir -p "./$fw"
    
    # Split the pages for this framework
    IFS="|" read -ra pages <<< "${framework_pages[$fw]}"
    
    # Loop through each page
    for i in "${!pages[@]}"; do
        title="${pages[$i]}"
        # Simple sidebar ordering
        sidebar_order=$i
        
        # Create the markdown file with front matter
        cat <<EOL > "./$fw/${title,,// /-}.md"
---
title: '$title'
sidebar:
    order: $sidebar_order
    badge:
        text: WIP
        variant: tip
---
EOL
    done
done

echo "Markdown files generated successfully."
