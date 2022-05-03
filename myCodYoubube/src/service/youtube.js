import axios from 'axios'

class Youtube {
    constructor(key){
        this.youtube = axios.create({
            baseURL:'https://youtube.googleapis.com/youtube/v3',
            params:{key: key},
        });
    }

    async mostPopular(){
        const response = await this.youtube.get('videos',{
            params:{
                part:'snippet',
                chart: 'mostPopular',
                maxResults: 25,
            }
        });
        return response.data.items;
        //  const response = await fetch(`/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`, this.getRequestOptions.preloadResponse);
        // const result_1 = await response.json();
        // return result_1.items;
    }

    async search(query){
        
        const response = await this.youtube.get('search',{
            params:{
                part:'snippet',
                maxResults:25,
                type: 'video',
                q: query
            }
        });
        return response.data.items;
    }

}

export default Youtube;