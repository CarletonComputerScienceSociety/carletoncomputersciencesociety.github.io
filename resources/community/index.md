---
layout: default
permalink: /resources/community/
title: Community Resources
published: true
---

<script>
    async function getData(){
        let response = await fetch(`https://cors.discretemath.ca/https://resources.discretemath.ca/api/resources/resources_pages/4`)
        let data = await response.json()
        let resource_content = document.querySelector(".resource-content")
        let page_index = 2

        let header = `
            <div class="resource_page_header">
                <h1>`+data.title+`</h1>
                <p>`+data.description+`</p>
            </div>
            `
        resource_content.innerHTML += header
        
        for (let i = 0; i < data.resource_page_sections.length; i++) {
            
            let h1 = `<a href="`+data.resource_page_sections[i].url+`">`+data.resource_page_sections[i].title+`</a>`

            let resource_page_section = `
            <hr>    
            <div class="resource_page_section">
                <h3>`+(data.resource_page_sections[i].url && data.resource_page_sections[i].url.length > 1 ? h1 : data.resource_page_sections[i].title) +`</h3>
                <p style="margin-left: 1.4em">`+data.resource_page_sections[i].description+`</p>
            </div>
            `
            resource_content.innerHTML += resource_page_section

             for (let j = 0; j < data.resource_page_sections[i].resources.length; j++) {
                 
                let this_resource = data.resource_page_sections[i].resources[j]

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
