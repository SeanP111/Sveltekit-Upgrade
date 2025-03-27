/** @type {import('./$types').PageServerLoad} */
export async function load() {
    return {cards: [
            {
                title: "Bachelor of Computing Science (Honours)",
                span: "Major in Enterprise Systems Development",
                year: "2022 - 2024",
                tags: ["Python", "C", "Javascript"],
                color: "#dcb5ee;"
            }
            ,
            {
                title: "Bachelor of Science in Games Development",
                span: "Sub Major in Enterprise Systems Development",
                year: "2020 - 2022",
                tags: ["Java", "C#", "Unity", "Unreal", "C++", "SQL"],
                color: "#dcb5ee;"
            }
    
            ,
            {
                title: "Diploma in Languages",
                span: "Madarin Chinese",
                year: "2024 - Ongoing",
                tags: ["Chinese Speaking", "Chinese Writing", "Chinese Listening", "Chinese Culture"],
                color: "rgb(202, 202, 202)"
            }
    
            
            
           
        ]};
};