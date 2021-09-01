"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
    projectRoot: "./src",
    projectName: "Web-Tee",
    outDir: './dist/static',
    routes: {
        '/blog/:slug': {
            type: 'contentFolder',
            slug: {
                folder: "./blog"
            }
        },
        '/blog/:slug': {
            type: 'contentFolder',
            slug: {
                folder: "./blog"
            }
        },
    }
};
