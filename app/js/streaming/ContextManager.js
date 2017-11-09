/*
 * The copyright in this software module is being made available under the BSD License, included below. This software module may be subject to other third party and/or contributor rights, including patent rights, and no such rights are granted under this license.
 * The whole software resulting from the execution of this software module together with its external dependent software modules from dash.js project may be subject to Orange and/or other third party rights, including patent rights, and no such rights are granted under this license.
 *
 * Copyright (c) 2014, Orange
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
 * •  Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
 * •  Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
 * •  Neither the name of the Orange nor the names of its contributors may be used to endorse or promote products derived from this software module without specific prior written permission.
 *
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS “AS IS” AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
MediaPlayer.modules.ContextManager = function (){
    "use strict";

    return {
        system: undefined,
        debug: undefined,

        setContext: function(ctx) {
            this.system.autoMapOutlets = true;

            if (ctx === "MSS") {
                // here we map specific Class
                this.system.mapClass('mp4Processor', MediaPlayer.dependencies.Mp4Processor);
                this.system.mapClass('indexHandler', Mss.dependencies.MssHandler);
                this.system.mapClass('fragmentController', Mss.dependencies.MssFragmentController);
                this.system.mapClass('mssFragmentInfoController', Mss.dependencies.MssFragmentInfoController);
            } else if (ctx === "HLS") {
                this.system.mapClass('mp4Processor', MediaPlayer.dependencies.Mp4Processor);
                this.system.mapClass('fragmentController', Hls.dependencies.HlsFragmentController);
                this.system.mapClass('indexHandler', Hls.dependencies.HlsHandler);
            } else {
                this.system.mapClass('fragmentController', MediaPlayer.dependencies.FragmentController);
                this.system.mapClass('indexHandler', Dash.dependencies.DashHandler);
            }
        }
    };
};

MediaPlayer.modules.ContextManager.prototype =  {
    constructor: MediaPlayer.modules.ContextManager
};
