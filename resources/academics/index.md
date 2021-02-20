---
layout: default
permalink: /resources/academics/
title: Academics
published: true
---

<script>
    async function getData(){
        let response = await fetch(`https://cors.discretemath.ca/https://resources.discretemath.ca/api/resources/resources_pages/`)
        let data = await response.json()
        let resource_content = document.querySelector(".resource-content")
        let page_index = 7

        let header = `
            <div class="resource_page_header">
                <h1>`+data[page_index].title+`</h1>
                <p>`+data[page_index].description+`</p>
            </div>
            `
        resource_content.innerHTML += header
        
        for (let i = 0; i < data[page_index].resource_page_sections.length; i++) {
            
            let h1 = `<a href="`+data[page_index].resource_page_sections[i].url+`">`+data[page_index].resource_page_sections[i].title+`</a>`

            let resource_page_section = `
            <hr>    
            <div class="resource_page_section">
                <h3>`+(data[page_index].resource_page_sections[i].url && data[page_index].resource_page_sections[i].url.length > 1 ? h1 : data[page_index].resource_page_sections[i].title) +`</h3>
                <p>`+data[page_index].resource_page_sections[i].description+`</p>
            </div>
            `
            resource_content.innerHTML += resource_page_section

             for (let j = 0; j < data[page_index].resource_page_sections[i].resources.length; j++) {
                 
                let this_resource = data[page_index].resource_page_sections[i].resources[j]

                let h5 = `<a href="`+this_resource.url+`">`+this_resource.title+`</a>`
                let description = `<p>`+this_resource.description+`</p>`

                let resource = `
                <li class="resource">
                    <span>`+(this_resource.url !== null ? h5 : this_resource) +`</span>
                    `+ (this_resource.description.length > 1 ? description : '')+`
                </li>
                `

                 resource_content.innerHTML += resource
             }
        }
        
    }

    getData()
</script>
<div class='content-wrap'>
    <div class='resource-content'></div>
</div>

