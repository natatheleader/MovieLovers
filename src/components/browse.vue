<template>
    <div class="">

        <div class="place-content-center">
            <p class="text-white p-3">Search Tearm: </p>
            <input class="rounded-3xl w-full px-24 py-2" type="text" name="key" placeholder="Search Term" v-on:keyup="searchMonitor" v-model="search.keyword" />

            <div class="mt-6 flex">
                <div class="flex-auto">
                    <p class="text-white p-3">Quality: </p>
                    <select class="px-2 py-2 rounded-full" name="quality" @change="searchMonitor()" v-model="search.quality">
                        <option value="all">All</option>
                        <option value="480p">480p</option>
                        <option value="720p">720p</option>
                        <option value="1080p">1080p</option>
                        <option value="2160p">2160p</option>
                        <option value="3D">3D</option>
                    </select>
                </div>

                <div class="flex-auto">
                    <p class="text-white p-3">Genre: </p>
                    <select class="px-2 py-2 rounded-full" name="genre" @change="searchMonitor()" v-model="search.genre">
                        <option value="all">All</option>
                        <option value="action">Action</option>
                        <option value="adventure">Adventure</option>
                        <option value="animation">Animation</option>
                        <option value="biography">Biography</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="documentary">Documentary</option>
                        <option value="drama">Drama</option>
                        <option value="family">Family</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="film-noir">Film-Noir</option>
                        <option value="game-show">Game-Show</option>
                        <option value="history">History</option>
                        <option value="horror">Horror</option>
                        <option value="music">Music</option>
                        <option value="musical">Musical</option>
                        <option value="mystery">Mystery</option>
                        <option value="news">News</option>
                        <option value="reality-tv">Reality-TV</option>
                        <option value="romance">Romance</option>
                        <option value="sci-fi">Sci-Fi</option>
                        <option value="sport">Sport</option>
                        <option value="talk-show">Talk-Show</option>
                        <option value="thriller">Thriller</option>
                        <option value="war">War</option>
                        <option value="western">Western</option>
                    </select>
                </div>

                <div class="flex-auto">
                    <p class="text-white p-3">Rating:</p>
                    <select class="px-2 py-2 rounded-full" name="rating" @change="searchMonitor()" v-model="search.rating">
                        <option value="0">All</option>
                        <option value="9">9+</option>
                        <option value="8">8+</option>
                        <option value="7">7+</option>
                        <option value="6">6+</option>
                        <option value="5">5+</option>
                        <option value="4">4+</option>
                        <option value="3">3+</option>
                        <option value="2">2+</option>
                        <option value="1">1+</option>
                    </select>
                </div>

                <!-- <div class="flex-auto">
                    <p class="text-white p-3">Year:</p>
                    <select class="px-2 py-2 rounded-full" name="year" @change="searchMonitor()" v-model="search.year">
                        <option value="0">All</option>
                        <option value="2022">2022</option>
                        <option value="2021">2021</option>
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                        <option value="2015-2018">2015-2018</option>
                        <option value="2010-2014">2010-2014</option>
                        <option value="2000-2009">2000-2009</option>
                        <option value="1990-1999">1990-1999</option>
                        <option value="1980-1989">1980-1989</option>
                        <option value="1970-1979">1970-1979</option>
                        <option value="1950-1969">1950-1969</option>
                        <option value="1900-1949">1900-1949</option>
                    </select>
                </div> -->

                <!--<div class="flex-auto">
                    <p class="text-white p-3">Language:</p>
                    <select class="px-2 py-2 rounded-full" name="language" @change="searchMonitor()" v-model="search.language">
                        <option value="en">English</option>
                        <option value="foreign">Foreign</option>
                        <option value="all" selected="selected">All</option>
                        <option value="fr">French (2025)</option>
                        <option value="ja">Japanese (1780)</option>
                        <option value="it">Italian (1013)</option>
                        <option value="es">Spanish (977)</option>
                        <option value="de">German (783)</option>
                        <option value="zh">Chinese (692)</option>
                        <option value="ko">Korean (649)</option>
                        <option value="cn">Cantonese (567)</option>
                        <option value="hi">Hindi (447)</option>
                        <option value="ru">Russian (284)</option>
                        <option value="sv">Swedish (267)</option>
                        <option value="pt">Portuguese (233)</option>
                        <option value="pl">Polish (212)</option>
                        <option value="th">Thai (142)</option>
                        <option value="da">Danish (137)</option>
                        <option value="nl">Dutch (100)</option>
                        <option value="no">Norwegian (97)</option>
                        <option value="ta">Tamil (76)</option>
                        <option value="fi">Finnish (75)</option>
                        <option value="vi">Vietnamese (74)</option>
                        <option value="cs">Czech (70)</option>
                        <option value="te">Telugu (70)</option>
                        <option value="ar">Arabic (55)</option>
                        <option value="tr">Turkish (52)</option>
                        <option value="hu">Hungarian (42)</option>
                        <option value="id">Indonesian (41)</option>
                        <option value="fa">Persian (38)</option>
                        <option value="tl">Tagalog (33)</option>
                        <option value="el">Greek (29)</option>
                        <option value="he">Hebrew (23)</option>
                        <option value="uk">Ukrainian (22)</option>
                        <option value="et">Estonian (20)</option>
                        <option value="ro">Romanian (19)</option>
                        <option value="bn">Bangla (18)</option>
                        <option value="ur">Urdu (16)</option>
                        <option value="ml">Malayalam (15)</option>
                        <option value="ms">Malay (14)</option>
                        <option value="ca">Catalan (12)</option>
                        <option value="is">Icelandic (11)</option>
                        <option value="sk">Slovak (10)</option>
                        <option value="sr">Serbian (9)</option>
                        <option value="xx">xx (8)</option>
                        <option value="pa">Punjabi (7)</option>
                        <option value="ka">Georgian (6)</option>
                        <option value="wo">Wolof (6)</option>
                        <option value="kn">Kannada (5)</option>
                        <option value="am">Amharic (5)</option>
                        <option value="af">Afrikaans (5)</option>
                        <option value="eu">Basque (5)</option>
                        <option value="lv">Latvian (5)</option>
                        <option value="bo">Tibetan (4)</option>
                        <option value="mr">Marathi (4)</option>
                        <option value="lt">Lithuanian (3)</option>
                        <option value="bs">Bosnian (3)</option>
                        <option value="sh">Serbo-Croatian (3)</option>
                        <option value="gl">Galician (3)</option>
                        <option value="mk">Macedonian (3)</option>
                        <option value="la">Latin (2)</option>
                        <option value="zxx">No linguistic content (2)</option>
                        <option value="hy">Armenian (2)</option>
                        <option value="cmn">cmn (2)</option>
                        <option value="ps">Pashto (2)</option>
                        <option value="ak">Akan (2)</option>
                        <option value="mn">Mongolian (2)</option>
                        <option value="st">Southern Sotho (2)</option>
                        <option value="sw">Swahili (2)</option>
                        <option value="sq">Albanian (1)</option>
                        <option value="so">Somali (1)</option>
                        <option value="ig">Igbo (1)</option>
                        <option value="ku">Kurdish (1)</option>
                        <option value="cy">Welsh (1)</option>
                        <option value="mt">Maltese (1)</option>
                        <option value="kk">Kazakh (1)</option>
                        <option value="sl">Slovenian (1)</option>
                        <option value="rw">Kinyarwanda (1)</option>
                        <option value="tw">Twi (1)</option>
                        <option value="xh">Xhosa (1)</option>
                        <option value="yo">Yoruba (1)</option>
                        <option value="gu">Gujarati (1)</option>
                        <option value="yue">Cantonese (1)</option>
                        <option value="fil">Filipino (1)</option>
                        <option value="ky">Kyrgyz (1)</option>
                        <option value="os">Ossetic (1)</option>
                        <option value="nb">Norwegian Bokmål (1)</option>
                        <option value="yi">Yiddish (1)</option>
                        <option value="aa">Afar (1)</option>
                        <option value="mi">Maori (1)</option>
                        <option value="km">Khmer (1)</option>
                        <option value="ga">Irish (1)</option>
                        <option value="lb">Luxembourgish (1)</option>
                        <option value="zu">Zulu (1)</option>
                        <option value="ht">Haitian Creole (1)</option>
                        <option value="az">Azerbaijani (1)</option>
                        <option value="ab">Abkhazian (1)</option>
                        <option value="iu">Inuktitut (1)</option>
                        <option value="lg">Ganda (1)</option>
                        <option value="be">Belarusian (1)</option>
                        <option value="hr">Croatian (1)</option>
                    </select>
                </div> -->

                <div class="flex-auto">
                    <p class="text-white p-3">Order By:</p>
                    <select class="px-2 py-2 rounded-full" name="order" @change="searchMonitor()" v-model="search.order">
                        <option value="latest">Latest</option>
                        <option value="oldest">Oldest</option>
                        <option value="featured">Featured</option>
                        <option value="seeds">Seeds</option>
                        <option value="peers">Peers</option>
                        <option value="year">Year</option>
                        <option value="rating">IMDb Rating</option>
                        <option value="like_count">YTS Likes</option>
                        <option value="rt_audience">RT Audience</option>
                        <option value="title">Alphabetical</option>
                        <option value="download_count">Downloads</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Hero',
  data () {
    return {
      searched: [],
      search: {
        keyword: '',
        quality: 'all',
        genre: 'all',
        rating: 0,
        year: '',
        language: '',
        order: 'latest'
      },
      result: false
    }
  },
  methods: {
    searchMonitor: function () {
      axios.get(`https://yts.mx/api/v2/list_movies.json?query_term=${this.search.keyword}&quality=${this.search.quality}&genre=${this.search.genre}&minimum_rating=${this.search.rating}&sort_by=${this.search.order}`).then(response => {
        this.searched = response.data.data.movies

        if (response.data.data.movie_count > 0) {
          this.result = true
        } else {
          this.result = false
        }
        this.$emit('update:result', this.result, this.searched)
      })
    }
  }

}
</script>
