// ==UserScript==
// @name         Stove Flake Automation Script
// @namespace    https://github.com/TellurideX/Stove-Flake-Automation-Script-Tampermonkey
// @version      1.2.3
// @description  스토브 플레이크 샵 뽑기 자동화 스크립트
// @author       TellurideX
// @match        https://reward.onstove.com/ko/event*
// @icon         data:image/x-icon;base64,AAABAAEAICAAAAEAIACoEAAAFgAAACgAAAAgAAAAQAAAAAEAIAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAzb/P/AEvw/wBL8P8AS/D/AEvw/wBL8P8AS/D/AEvw/wBL8P8AS/D/AEvw/wBL8P8AS/D/AEvw/wBL8P8AS/D/AEvw/wBL8P8AS/D/AEvw/wBL8P8AS/D/AEvw/wBL8P8AS/D/AEvw/wBL8P8AS/D/AEvw/wBL8P8AS/D/AEvw/2aT9v8zb/P/AEvw/wBL8P8AS/D/AEvw/wBL8P8AS/D/AEvw/wBL8P8AS/D/AEvw/wBL8P8AS/D/AEvw/wBL8P8AS/D/AEvw/wBL8P8AS/D/AEvw/wBL8P8AS/D/AEvw/wBL8P8AS/D/AEvw/wBL8P8AS/D/AEvw/wBL8P8AS/D/ZpP2/2aT9v8zb/P/AEvw/wBL8P8AS/D/AEvw/wBL8P8AS/D/AEvw/wBL8P8AS/D/AEvw/wBL8P8AS/D/AEvw/wBL8P8AS/D/AEvw/wBL8P8AS/D/AEvw/wBL8P8AS/D/AEvw/wBL8P8AS/D/AEvw/wBL8P8AS/D/AEvw/wBL8P9mk/b/ZpP2/2aT9v8zb/P/AEvw/wBL8P8AS/D/AEvw/wBL8P8AS/D/AEvw/wBL8P8AS/D/AEvw/wBL8P8AS/D/AEvw/wBL8P8AS/D/AEvw/wBL8P8AS/D/AEvw/wBL8P8AS/D/AEvw/wBL8P8AS/D/AEvw/wBL8P8AS/D/AEvw/2aT9v9mk/b/ZpP2/2aT9v8zb/P/AEvw/wBL8P8AS/D/AEvw/wBL8P8AS/D/AEvw/wBL8P8AS/D/AEvw/wBL8P8AS/D/AEvw/wBL8P8AS/D/AEvw/wBL8P8AS/D/AEvw/wBL8P8AS/D/AEvw/wBL8P8AS/D/AEvw/wBL8P8AS/D/ZpP2/2aT9v9mk/b/ZpP2/2aT9v8zb/P/AEvw/wBL8P8AS/D/AEvw/wBL8P8AS/D/AEvw/wBL8P8AS/D/AEvw/wBL8P8AS/D/AEvw/wBL8P8AS/D/AEvw/wBL8P8AS/D/AEvw/wBL8P8AS/D/AEvw/wBL8P8AS/D/AEvw/wBL8P9mk/b/ZpP2/2aT9v9mk/b/ZpP2/2aT9v8zb/P/AEvw/wBL8P8AS/D/AEvw/wBL8P8AS/D/AEvw/wRO8P8GT/D/CFHw/wZP8P8CTPD/AEvw/wBL8P8AS/D/AEvw/wBL8P8AS/D/AEvw/wBL8P8AS/D/AEvw/wBL8P8AS/D/AEvw/2aT9v9mk/b/ZpP2/2aT9v9mk/b/ZpP2/2aT9v8zb/P/AEvw/wBL8P8AS/D/GV3x/4+w+P/o7/7///////////////////////7+///E1fz/TYH1/wBL8P8AS/D/AEvw/wBL8P8AS/D/AEvw/wBL8P8AS/D/AEvw/wBL8P8AS/D/ZpP2/2aT9v9mk/b/ZpP2/2aT9v9mk/b/ZpP2/2aT9v8zb/P/AEvw/0p/9P/v9P7/////////////////////////////////////////////////mbf5/wJM8P8AS/D/AEvw/wBL8P8AS/D/AEvw/wBL8P8AS/D/AEvw/wBL8P9mk/b/ZpP2/2aT9v9mk/b/ZpP2/2aT9v9mk/b/ZpP2/2aT9v9ikPb/+vv/////////////////////////////////////////////////////////////g6f4/wBL8P8AS/D/AEvw/wBL8P8AS/D/AEvw/wBL8P8AS/D/AEvw/2aT9v9mk/b/ZpP2/2aT9v9mk/b/ZpP2/2aT9v9mk/b/Z5P2/+ju/v//////////////////////1uL9/4yu+P98o/f/n7v5//P3/v/////////////////6+///CVHx/wBL8P8AS/D/AEvw/wBL8P8AS/D/AEvw/wBL8P8AS/D/ZpP2/2aT9v9mk/b/ZpP2/2aT9v9mk/b/ZpP2/2aT9v90nff//////////////////////4Gm+P8BTPD/AEvw/wBL8P8AS/D/MG3z//7+//////////////////8hYvL/AEvw/wBL8P8AS/D/AEvw/wBL8P8AS/D/AEvw/wBL8P9mk/b/ZpP2/2aT9v9mk/b/ZpP2/2aT9v9mk/b/ZpP2/3qh9//8/f/////////////V4v3/AUzw/wBL8P8AS/D/AEvw/wBL8P8AS/D/7PL+/////////////////yxq8/8AS/D/AEvw/wBL8P8AS/D/AEvw/wBL8P8AS/D/AEvw/2aT9v9mk/b/ZpP2/2aT9v9mk/b/ZpP2/2aT9v9mk/b/ZpP2/2uW9v+Lrfj/r8f6/5u5+f8zb/P/AEvw/wBL8P8AS/D/AUzw/3ae9///////////////////////Jmby/wBL8P8AS/D/AEvw/wBL8P8AS/D/AEvw/wBL8P8AS/D/ZpP2/2aT9v9mk/b/ZpP2/2aT9v9mk/b/ZpP2/2aT9v9mk/b/ZpP2/2aT9v9mk/b/ZpP2/2+Z9/9umfb/fKP3/6nC+v/l7f3///////////////////////////8RV/H/AEvw/wBL8P8AS/D/AEvw/wBL8P8AS/D/AEvw/wBL8P9mk/b/ZpP2/2aT9v9mk/b/ZpP2/2aT9v9mk/b/ZpP2/2aT9v9mk/b/ZpP2/32j9//N3Pz//f7/////////////////////////////////////////////tcv7/wBL8P8AS/D/AEvw/wBL8P8AS/D/AEvw/wBL8P8AS/D/AEvw/2aT9v9mk/b/ZpP2/2aT9v9mk/b/ZpP2/2aT9v9mk/b/ZpP2/2aT9v+Ssvn/+vv//////////////////////////////////////////////////8nZ/P8TWPH/AEvw/wBL8P8AS/D/AEvw/wBL8P8AS/D/AEvw/wBL8P8AS/D/ZpP2/2aT9v9mk/b/ZpP2/2aT9v9mk/b/ZpP2/2aT9v9mk/b/eKD3//j6/////////////////////////////////////////////+Pr/f92nvf/Bk/w/wBL8P8AS/D/AEvw/wBL8P8AS/D/AEvw/wBL8P8AS/D/AEvw/wBL8P9mk/b/ZpP2/2aT9v9mk/b/ZpP2/2aT9v9mk/b/ZpP2/2aT9v+5zfv///////////////////////7+///e6P3/wdP7/6W/+v9ZivX/Akzw/wBL8P8AS/D/AEvw/wBL8P8AS/D/AEvw/wBL8P8AS/D/AEvw/wBL8P8AS/D/AEvw/2aT9v9mk/b/ZpP2/2aT9v9mk/b/ZpP2/2aT9v9mk/b/ZpP2/9zm/f/////////////////q8P7/eKD3/2aT9v9mk/b/ZpP2/2aT9v8zb/P/AEvw/wBL8P8AS/D/AEvw/wBL8P8AS/D/AEvw/wBL8P8AS/D/AEvw/wBL8P8AS/D/ZpP2/2aT9v9mk/b/ZpP2/2aT9v9mk/b/ZpP2/2aT9v9mk/b/4er9/////////////////7bL+/9mk/b/ZpP2/2aT9v9mk/b/ZpP2/8jY/P+Ytvn/OHPz/wNN8P8AS/D/AEvw/wBL8P8AS/D/AEvw/wBL8P8AS/D/AEvw/wBL8P9mk/b/ZpP2/2aT9v9mk/b/ZpP2/2aT9v9mk/b/ZpP2/2aT9v/P3fz/////////////////4ur9/2yX9v9mk/b/ZpP2/2aT9v+gvPn/////////////////7vP+/wdQ8P8AS/D/AEvw/wBL8P8AS/D/AEvw/wBL8P8AS/D/AEvw/2aT9v9mk/b/ZpP2/2aT9v9mk/b/ZpP2/2aT9v9mk/b/ZpP2/5y5+f//////////////////////6e/+/7bM+/+wyPr/1OH8///////////////////////c5v3/AEvw/wBL8P8AS/D/AEvw/wBL8P8AS/D/AEvw/wBL8P8AS/D/ZpP2/2aT9v9mk/b/ZpP2/2aT9v9mk/b/ZpP2/2aT9v9mk/b/Z5T2/93n/f///////////////////////////////////////////////////////////5Oz+f8zb/P/AEvw/wBL8P8AS/D/AEvw/wBL8P8AS/D/AEvw/wBL8P9mk/b/ZpP2/2aT9v9mk/b/ZpP2/2aT9v9mk/b/ZpP2/2aT9v9mk/b/c5z3/9/p/f////////////////////////////////////////////7+//+qw/r/ZpP2/2aT9v8zb/P/AEvw/wBL8P8AS/D/AEvw/wBL8P8AS/D/AEvw/2aT9v9mk/b/ZpP2/2aT9v9mk/b/ZpP2/2aT9v9mk/b/ZpP2/2aT9v9mk/b/aZX2/6rD+v/r8f7///////////////////////3+///U4fz/iaz4/2aT9v9mk/b/ZpP2/2aT9v8zb/P/AEvw/wBL8P8AS/D/AEvw/wBL8P8AS/D/ZpP2/2aT9v9mk/b/ZpP2/2aT9v9mk/b/ZpP2/2aT9v9mk/b/ZpP2/2aT9v9mk/b/ZpP2/2aT9v9olPb/apb2/2qW9v9plfb/Z5P2/2aT9v9mk/b/ZpP2/2aT9v9mk/b/ZpP2/2aT9v8zb/P/AEvw/wBL8P8AS/D/AEvw/wBL8P9mk/b/ZpP2/2aT9v9mk/b/ZpP2/2aT9v9mk/b/ZpP2/2aT9v9mk/b/ZpP2/2aT9v9mk/b/ZpP2/2aT9v9mk/b/ZpP2/2aT9v9mk/b/ZpP2/2aT9v9mk/b/ZpP2/2aT9v9mk/b/ZpP2/2aT9v8zb/P/AEvw/wBL8P8AS/D/AEvw/2aT9v9mk/b/ZpP2/2aT9v9mk/b/ZpP2/2aT9v9mk/b/ZpP2/2aT9v9mk/b/ZpP2/2aT9v9mk/b/ZpP2/2aT9v9mk/b/ZpP2/2aT9v9mk/b/ZpP2/2aT9v9mk/b/ZpP2/2aT9v9mk/b/ZpP2/2aT9v8zb/P/AEvw/wBL8P8AS/D/ZpP2/2aT9v9mk/b/ZpP2/2aT9v9mk/b/ZpP2/2aT9v9mk/b/ZpP2/2aT9v9mk/b/ZpP2/2aT9v9mk/b/ZpP2/2aT9v9mk/b/ZpP2/2aT9v9mk/b/ZpP2/2aT9v9mk/b/ZpP2/2aT9v9mk/b/ZpP2/2aT9v8zb/P/AEvw/wBL8P9mk/b/ZpP2/2aT9v9mk/b/ZpP2/2aT9v9mk/b/ZpP2/2aT9v9mk/b/ZpP2/2aT9v9mk/b/ZpP2/2aT9v9mk/b/ZpP2/2aT9v9mk/b/ZpP2/2aT9v9mk/b/ZpP2/2aT9v9mk/b/ZpP2/2aT9v9mk/b/ZpP2/2aT9v8zb/P/AEvw/2aT9v9mk/b/ZpP2/2aT9v9mk/b/ZpP2/2aT9v9mk/b/ZpP2/2aT9v9mk/b/ZpP2/2aT9v9mk/b/ZpP2/2aT9v9mk/b/ZpP2/2aT9v9mk/b/ZpP2/2aT9v9mk/b/ZpP2/2aT9v9mk/b/ZpP2/2aT9v9mk/b/ZpP2/2aT9v8zb/P/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=
// @homepageURL  https://github.com/TellurideX/Stove-Flake-Automation-Script-Tampermonkey
// @updateURL    https://raw.githubusercontent.com/TellurideX/Stove-Flake-Automation-Script-Tampermonkey/main/stove-flake-automation.user.js
// @downloadURL  https://raw.githubusercontent.com/TellurideX/Stove-Flake-Automation-Script-Tampermonkey/main/stove-flake-automation.user.js
// @grant        GM_setValue
// @grant        GM_getValue
// ==/UserScript==

(function() {
    'use strict';

    // ================================
    // 스크립트 버전 & 패치노트 관리
    // ================================
    // ⚠ @version 메타데이터와 반드시 동일하게 유지하세요.
    const SCRIPT_VERSION = '1.2.3';

    // 패치내역은 여기만 수정하면 됩니다.
    // 새 버전 배포 시, 맨 위에 항목을 하나 더 추가하세요.
    const PATCH_HISTORY = [
        {
            version: '1.2.3',
            title: 'v1.2.3',
            lines: [
                '- 버그 픽스'
            ]
        },
        {
            version: '1.2.2',
            title: 'v1.2.2',
            lines: [
                '- 버그 픽스'
            ]
        },
        {
            version: '1.2.1',
            title: 'v1.2.1',
            lines: [
                '- 100 뽑기 / 1,000 뽑기 횟수 통계 표시 기능 추가',
                '- 플레이크 순이익(실제 획득) 추가',
            ]
        },
        {
            version: '1.0.0',
            title: 'v1.0.0',
            lines: [
                '- Stove Flake Automation Script 최초 공개 버전'
            ]
        }
    ];

    const VERSION_STORAGE_KEY = 'stove_flake_last_version_seen';

    function gmGet(key, defaultValue) {
        try {
            if (typeof GM_getValue === 'function') {
                return GM_getValue(key, defaultValue);
            }
        } catch (e) {
            console.log('[GM] GM_getValue 오류', e);
        }
        return defaultValue;
    }

    function gmSet(key, value) {
        try {
            if (typeof GM_setValue === 'function') {
                GM_setValue(key, value);
            }
        } catch (e) {
            console.log('[GM] GM_setValue 오류', e);
        }
    }

    function getCurrentPatchEntry() {
        for (let i = 0; i < PATCH_HISTORY.length; i += 1) {
            if (PATCH_HISTORY[i].version === SCRIPT_VERSION) {
                return PATCH_HISTORY[i];
            }
        }
        return null;
    }

    // ================================
    // 자동화 상태
    // ================================
    let isAuto100Running = false;
    let isAuto1000Running = false;

    let auto100Timer = null;
    let auto1000Timer = null;

    let remainingDraws = null; // 오늘 남은 뽑기 횟수 (자동 실행용)

    // ================================
    // 계정별 보상 기록 상태 (하루 단위)
    // ================================
    const BASE_STORAGE_KEY_REWARD = 'stove_flake_reward_v1';

    let rewardState = null;
    let currentAccountId = null;

    function getRewardStorageKey() {
        if (!currentAccountId) {
            currentAccountId = 'default';
        }
        return BASE_STORAGE_KEY_REWARD + '::' + currentAccountId;
    }

    // ================================
    // 계정 ID 해석
    // ================================
    function extractNicknameFromUserInfoLayer() {
        const layer = document.getElementById('gnb-userinfo-layer');
        if (!layer) return null;

        const nickSpan = layer.querySelector(
            'span.stds-text.text-2xl.leading-xl.font-bold'
        );
        if (!nickSpan) return null;

        const nick = (nickSpan.textContent || '').trim();
        return nick || null;
    }

    function closeUserInfoLayer(triggerBtn) {
        const layer = document.getElementById('gnb-userinfo-layer');
        if (!layer) {
            try {
                triggerBtn.click();
            } catch (e) {
                // ignore
            }
            return;
        }

        const closeBtn = layer.querySelector('button.stds-button-ghost');
        if (closeBtn) {
            try {
                closeBtn.click();
                console.log('[계정] 팝업 닫기 버튼 클릭');
                return;
            } catch (e) {
                console.log('[계정] 팝업 닫기 버튼 클릭 실패', e);
            }
        }

        try {
            triggerBtn.click();
            console.log('[계정] gnb-user-menu-button 재클릭으로 팝업 닫기 시도');
        } catch (e) {
            console.log('[계정] gnb-user-menu-button 재클릭 실패', e);
        }
    }

    // 렌더링을 기다리면서 계정 ID를 결정
    function resolveAccountId(callback) {
        if (currentAccountId) {
            if (callback) callback();
            return;
        }

        let tries = 0;
        const maxTries = 40; // 40 * 250ms ≒ 10초
        const interval = 250;
        let menuClicked = false;

        const timer = window.setInterval(function() {
            tries += 1;

            if (currentAccountId) {
                window.clearInterval(timer);
                if (callback) callback();
                return;
            }

            const nick = extractNicknameFromUserInfoLayer();
            if (nick) {
                currentAccountId = nick;
                console.log('[계정] 메뉴에서 닉네임 읽음 →', currentAccountId);

                const menuRootNow = document.getElementById('gnb-user-menu-button');
                const triggerBtnNow = menuRootNow ? menuRootNow.querySelector('button') : null;
                if (triggerBtnNow) {
                    closeUserInfoLayer(triggerBtnNow);
                }

                window.clearInterval(timer);
                if (callback) callback();
                return;
            }

            const menuRoot = document.getElementById('gnb-user-menu-button');
            if (!menuRoot) {
                if (tries >= maxTries) {
                    window.clearInterval(timer);
                    console.log('[계정] gnb-user-menu-button 미등장 → default 사용');
                    currentAccountId = 'default';
                    if (callback) callback();
                }
                return;
            }

            const triggerBtn = menuRoot.querySelector('button');
            if (!triggerBtn) {
                if (tries >= maxTries) {
                    window.clearInterval(timer);
                    console.log('[계정] gnb-user-menu-button 안에 button 없음 → default 사용');
                    currentAccountId = 'default';
                    if (callback) callback();
                }
                return;
            }

            if (!menuClicked) {
                try {
                    triggerBtn.click();
                    menuClicked = true;
                    console.log('[계정] 계정 메뉴 자동 오픈 시도');
                } catch (e) {
                    console.log('[계정] 계정 메뉴 자동 오픈 실패 → default 사용', e);
                    window.clearInterval(timer);
                    currentAccountId = 'default';
                    if (callback) callback();
                }
                return;
            }

            if (tries >= maxTries) {
                window.clearInterval(timer);
                console.log('[계정] 닉네임을 찾지 못함 → default 사용');
                currentAccountId = 'default';
                closeUserInfoLayer(triggerBtn);
                if (callback) callback();
            }
        }, interval);
    }

    // ================================
    // 날짜/보상 상태 관리
    // ================================
    function getTodayDateString() {
        const d = new Date();
        const y = d.getFullYear();
        const m = String(d.getMonth() + 1).padStart(2, '0');
        const day = String(d.getDate()).padStart(2, '0');
        return y + '-' + m + '-' + day;
    }

    function initRewardState() {
        const today = getTodayDateString();
        const key = getRewardStorageKey();
        const stored = gmGet(key, null);
        if (stored && stored.date === today && Array.isArray(stored.logs)) {
            rewardState = {
                date: stored.date,
                logs: stored.logs || [],
                flakeTotal: stored.flakeTotal || 0,
                otherCounts: stored.otherCounts || {},
                lastIndex: stored.lastIndex || 0,
                lastLabel: stored.lastLabel || null,
                // 뽑기 종류별 횟수
                drawCount100: stored.drawCount100 || 0,
                drawCount1000: stored.drawCount1000 || 0
            };
        } else {
            rewardState = {
                date: today,
                logs: [],
                flakeTotal: 0,
                otherCounts: {},
                lastIndex: 0,
                lastLabel: null,
                drawCount100: 0,
                drawCount1000: 0
            };
            gmSet(key, rewardState);
        }
        console.log('[보상 상태] init, account =', currentAccountId, ', logs =', rewardState.logs.length);
    }

    function ensureRewardStateForToday() {
        const today = getTodayDateString();
        const key = getRewardStorageKey();
        if (!rewardState || rewardState.date !== today) {
            rewardState = {
                date: today,
                logs: [],
                flakeTotal: 0,
                otherCounts: {},
                lastIndex: 0,
                lastLabel: null,
                drawCount100: 0,
                drawCount1000: 0
            };
            gmSet(key, rewardState);
        }
    }

    function saveRewardState() {
        if (!rewardState) return;
        const key = getRewardStorageKey();
        gmSet(key, rewardState);
    }

    // ================================
    // UI: 보상 기록 패널
    // ================================
    function escapeHtml(str) {
        if (!str) return '';
        return str.replace(/[&<>"']/g, function(ch) {
            switch (ch) {
                case '&': return '&amp;';
                case '<': return '&lt;';
                case '>': return '&gt;';
                case '"': return '&quot;';
                case '\'': return '&#39;';
                default: return ch;
            }
        });
    }

    function renderRewardPanel() {
        if (!rewardState) return;

        let panel = document.getElementById('stove-reward-panel');
        if (!panel) {
            panel = document.createElement('div');
            panel.id = 'stove-reward-panel';
            panel.style.position = 'fixed';
            panel.style.right = '20px';
            panel.style.bottom = '180px';
            panel.style.width = '260px';
            panel.style.background = 'rgba(0, 0, 0, 0.7)';
            panel.style.color = '#fff';
            panel.style.borderRadius = '8px';
            panel.style.padding = '8px 10px';
            panel.style.fontSize = '12px';
            panel.style.zIndex = '999999';
            panel.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.4)';
            panel.style.backdropFilter = 'blur(4px)';
            document.body.appendChild(panel);
        }

        const accountLabel = currentAccountId || 'default';
        let html = '';

        // 제목 + 날짜
        html += '<div style="font-weight:bold;margin-bottom:2px;font-size:12px;">보상 기록 (계정: ' +
            escapeHtml(accountLabel) + ')</div>';
        html += '<div style="font-weight:normal;margin-bottom:4px;font-size:10px;opacity:0.8;">날짜: ' +
            escapeHtml(rewardState.date) + '</div>';

        // 로그 영역 (스크롤 자동 하단 이동용 id)
        html += '<div id="stove-reward-log" style="border:1px solid rgba(255,255,255,0.15);' +
            'border-radius:4px;padding:4px;max-height:130px;overflow-y:auto;font-size:11px;' +
            'line-height:1.4;background:rgba(0,0,0,0.2);">';

        if (!rewardState.logs || rewardState.logs.length === 0) {
            html += '<div>기록된 보상이 없습니다.</div>';
        } else {
            rewardState.logs.forEach(function(log) {
                const idx = String(log.index).padStart(2, '0');
                html += '<div>[' + idx + '] "' + escapeHtml(log.label) + '" 보상 획득</div>';
            });
        }

        html += '</div>'; // 로그 박스 닫기

        // 종합 보상 계산 (플레이크 순이익 포함)
        const totalRewardFlake = rewardState.flakeTotal || 0;
        const drawCount100 = rewardState.drawCount100 || 0;
        const drawCount1000 = rewardState.drawCount1000 || 0;
        const consumedFlake = drawCount100 * 100 + drawCount1000 * 1000;
        const netFlake = totalRewardFlake - consumedFlake;

        // 종합 보상 제목에 뽑기 횟수 표시
        html += '<div style="font-weight:bold;margin:6px 0 4px;font-size:12px;">' +
            '종합 보상 (100 뽑기 : ' + drawCount100 + '회 // 1,000 뽑기 : ' + drawCount1000 + '회)' +
            '</div>';

        html += '<div style="border:1px solid rgba(255,255,255,0.15);border-radius:4px;padding:4px;' +
            'max-height:80px;overflow-y:auto;font-size:11px;line-height:1.4;background:rgba(0,0,0,0.2);">';

        let hasSummary = false;

        // 플레이크 : 총 보상 + 실제 획득
        if (totalRewardFlake > 0 || consumedFlake !== 0) {
            const totalFormatted = totalRewardFlake.toLocaleString('ko-KR');
            const netFormatted = netFlake.toLocaleString('ko-KR');
            html += '<div>플레이크 : ' + totalFormatted + ' (실제 획득 : ' + netFormatted + ')</div>';
            hasSummary = true;
        }

        // 기타 보상
        if (rewardState.otherCounts) {
            const labels = Object.keys(rewardState.otherCounts);
            labels.forEach(function(label) {
                const count = rewardState.otherCounts[label];
                html += '<div>' + escapeHtml(label) + ' : ' + count + '</div>';
                hasSummary = true;
            });
        }

        if (!hasSummary) {
            html += '<div>집계된 보상이 없습니다.</div>';
        }

        html += '</div>'; // 종합 보상 박스 닫기

        // 실제 DOM에 반영
        panel.innerHTML = html;

        // 로그 스크롤을 항상 맨 아래로 이동
        const logBox = document.getElementById('stove-reward-log');
        if (logBox) {
            logBox.scrollTop = logBox.scrollHeight;
        }
    }

    // ================================
    // 오늘 뽑기 횟수 파싱
    // ================================
    function getTodayDrawInfo() {
        const boxes = document.querySelectorAll('.stds-box');
        for (let i = 0; i < boxes.length; i += 1) {
            const box = boxes[i];
            if (!box) continue;

            const raw = (box.textContent || '').replace(/\s+/g, '');
            if (raw.indexOf('오늘뽑기') === -1) continue;

            const match = raw.match(/(\d+)\s*\/\s*(\d+)회?/);
            if (!match) continue;

            const used = parseInt(match[1], 10);
            const total = parseInt(match[2], 10);
            if (isNaN(used) || isNaN(total)) continue;

            return { used: used, total: total };
        }
        return null;
    }

    function getRemainingDrawsFromPage() {
        const info = getTodayDrawInfo();
        if (!info) return null;

        let remaining = info.total - info.used;
        if (remaining < 0) remaining = 0;
        if (remaining > info.total) remaining = info.total;
        return remaining;
    }

    // ================================
    // 버튼 찾기 헬퍼
    // ================================
    function findButtonByText(keyword) {
        const buttons = document.querySelectorAll('button');
        for (let i = 0; i < buttons.length; i += 1) {
            const btn = buttons[i];
            if (!btn) continue;
            const text = (btn.innerText || btn.textContent || '').trim();
            if (text.indexOf(keyword) !== -1) {
                return btn;
            }
        }
        return null;
    }

    function findButtonByTextCommaInsensitive(keyword) {
        const normalizedKeyword = keyword.replace(/,/g, '');
        const buttons = document.querySelectorAll('button');
        for (let i = 0; i < buttons.length; i += 1) {
            const btn = buttons[i];
            if (!btn) continue;
            const rawText = (btn.innerText || btn.textContent || '').trim();
            const normalizedText = rawText.replace(/,/g, '');
            if (normalizedText.indexOf(normalizedKeyword) !== -1) {
                return btn;
            }
        }
        return null;
    }

    // ================================
    // 메인/팝업 버튼 찾기
    // ================================
    function findMain100Button() {
        const buttons = document.querySelectorAll('button');
        for (let i = 0; i < buttons.length; i += 1) {
            const btn = buttons[i];
            if (!btn) continue;
            const text = (btn.innerText || btn.textContent || '').trim();
            if (text.indexOf('100 뽑기') !== -1 && text.indexOf('100 뽑기 한번 더!') === -1) {
                return btn;
            }
        }
        return null;
    }

    function findPopup100MoreButton() {
        return findButtonByText('100 뽑기 한번 더!');
    }

    function findMain1000Button() {
        return findButtonByTextCommaInsensitive('1000 뽑기');
    }

    function findPopup1000MoreButton() {
        return findButtonByTextCommaInsensitive('1000 뽑기 한번 더!');
    }

    function findPopupCloseButton() {
        return findButtonByText('닫기');
    }

    // ================================
    // 남은 횟수 사용 / 체크
    // ================================
    function ensureRemainingDraws() {
        if (remainingDraws === null) {
            console.log('[공통] remainingDraws가 null 입니다.');
            return false;
        }
        if (remainingDraws <= 0) {
            console.log('[공통] 남은 뽑기 횟수가 0회입니다. 자동 종료.');
            stopAutomation();
            return false;
        }
        return true;
    }

    function consumeOneDraw(tag) {
        if (remainingDraws === null) return;
        remainingDraws -= 1;
        console.log('[' + tag + '] 1회 사용 → 남은 횟수: ' + remainingDraws);
        if (remainingDraws <= 0) {
            console.log('[' + tag + '] 설정된 남은 횟수를 모두 사용했습니다. 자동 종료.');
            stopAutomation();
        }
    }

    // ================================
    // 보상 기록 로직
    // ================================
    // 팝업에서 100/1000 뽑기 종류 추출
    function detectDrawTypeFromPanel(panelEl) {
        if (!panelEl) return null;
        const buttons = panelEl.querySelectorAll('button');
        for (let i = 0; i < buttons.length; i += 1) {
            const btn = buttons[i];
            const text = (btn.innerText || btn.textContent || '').replace(/\s+/g, '');
            if (text.includes('100뽑기한번더!')) {
                return '100';
            }
            if (text.includes('1000뽑기한번더!')) {
                return '1000';
            }
        }
        return null;
    }

    function recordReward(rewardLabel, drawType) {
        // drawType: '100' | '1000' | null
        ensureRewardStateForToday();

        const info = getTodayDrawInfo();
        let index;
        if (info && typeof info.used === 'number') {
            index = info.used;
        } else if (rewardState.logs.length > 0) {
            index = rewardState.logs[rewardState.logs.length - 1].index + 1;
        } else {
            index = 1;
        }

        if (rewardState.lastIndex === index && rewardState.lastLabel === rewardLabel) {
            console.log('[보상 기록] 중복 감지 (index=' + index + ', label=' + rewardLabel + '), 기록 생략');
            return;
        }

        rewardState.logs.push({
            index: index,
            label: rewardLabel
        });

        // 플레이크 보상 합계
        if (rewardLabel.indexOf('플레이크') !== -1) {
            const match = rewardLabel.replace(/,/g, '').match(/(\d+)/);
            if (match) {
                const amount = parseInt(match[1], 10);
                if (!isNaN(amount)) {
                    rewardState.flakeTotal = (rewardState.flakeTotal || 0) + amount;
                }
            }
        } else {
            // 기타 보상 개수
            if (!rewardState.otherCounts[rewardLabel]) {
                rewardState.otherCounts[rewardLabel] = 0;
            }
            rewardState.otherCounts[rewardLabel] += 1;
        }

        // 뽑기 종류별 사용 횟수 기록
        if (drawType === '100') {
            rewardState.drawCount100 = (rewardState.drawCount100 || 0) + 1;
        } else if (drawType === '1000') {
            rewardState.drawCount1000 = (rewardState.drawCount1000 || 0) + 1;
        }

        rewardState.lastIndex = index;
        rewardState.lastLabel = rewardLabel;

        saveRewardState();
        renderRewardPanel();
    }

    function handleRewardPanel(panelEl) {
        if (!panelEl) return;
        const rewardSpan = panelEl.querySelector('.l1l2-flakehub-popup-common-received_reward');
        if (!rewardSpan) return;

        const rewardText = (rewardSpan.textContent || '').trim();
        if (!rewardText) return;

        const drawType = detectDrawTypeFromPanel(panelEl); // '100' | '1000' | null
        console.log('[보상 기록] 팝업 감지: ' + rewardText + ', drawType=' + drawType);
        recordReward(rewardText, drawType);
    }

    function scanAllRewardPanels() {
        const panels = document.querySelectorAll('.stds-dialog-panel');
        panels.forEach(function(panel) {
            handleRewardPanel(panel);
        });
    }

    function setupPopupObserver() {
        if (!window.MutationObserver) {
            console.log('[보상 기록] MutationObserver 미지원');
            return;
        }

        const observer = new MutationObserver(function() {
            scanAllRewardPanels();
        });

        observer.observe(document.body, { childList: true, subtree: true });
    }

    // ================================
    // 100 뽑기 자동 루프
    // ================================
    function loop100() {
        if (!isAuto100Running) return;

        if (!ensureRemainingDraws()) {
            return;
        }

        const popupBtn = findPopup100MoreButton();
        if (popupBtn) {
            if (popupBtn.disabled) {
                console.log('[100] 팝업 버튼 비활성화 → 0.9초 후 재시도');
                auto100Timer = window.setTimeout(loop100, 900);
                return;
            }

            try {
                popupBtn.click();
                console.log('[100] 팝업 "100 뽑기 한번 더!" 클릭');
                consumeOneDraw('100');
                if (!isAuto100Running) return;
            } catch (e) {
                console.log('[100] "100 뽑기 한번 더!" 클릭 중 오류, 자동 종료', e);
                stopAutomation();
                return;
            }

            auto100Timer = window.setTimeout(loop100, 900);
            return;
        }

        const mainBtn = findMain100Button();
        if (mainBtn) {
            if (mainBtn.disabled) {
                console.log('[100] 메인 "100 뽑기" 버튼 비활성화 → 자동 종료');
                stopAutomation();
                return;
            }

            try {
                mainBtn.click();
                console.log('[100] 메인 "100 뽑기" 클릭');
                consumeOneDraw('100');
                if (!isAuto100Running) return;
            } catch (e) {
                console.log('[100] 메인 "100 뽑기" 클릭 중 오류, 자동 종료', e);
                stopAutomation();
                return;
            }

            auto100Timer = window.setTimeout(loop100, 4000);
            return;
        }

        console.log('[100] 관련 버튼을 찾지 못했습니다. 자동 종료');
        stopAutomation();
    }

    // ================================
    // 1,000 뽑기 자동 루프
    // ================================
    function loop1000() {
        if (!isAuto1000Running) return;

        if (!ensureRemainingDraws()) {
            return;
        }

        const popupBtn = findPopup1000MoreButton();
        if (popupBtn) {
            if (popupBtn.disabled) {
                console.log('[1000] 팝업 버튼 비활성화 → 0.9초 후 재시도');
                auto1000Timer = window.setTimeout(loop1000, 900);
                return;
            }

            try {
                popupBtn.click();
                console.log('[1000] 팝업 "1000 뽑기 한번 더!" 클릭');
                consumeOneDraw('1000');
                if (!isAuto1000Running) return;
            } catch (e) {
                console.log('[1000] "1000 뽑기 한번 더!" 클릭 중 오류, 자동 종료', e);
                stopAutomation();
                return;
            }

            auto1000Timer = window.setTimeout(loop1000, 900);
            return;
        }

        const mainBtn = findMain1000Button();
        if (mainBtn) {
            if (mainBtn.disabled) {
                console.log('[1000] 메인 "1,000 뽑기" 버튼 비활성화 → 자동 종료');
                stopAutomation();
                return;
            }

            try {
                mainBtn.click();
                console.log('[1000] 메인 "1,000 뽑기" 클릭');
                consumeOneDraw('1000');
                if (!isAuto1000Running) return;
            } catch (e) {
                console.log('[1000] 메인 "1,000 뽑기" 클릭 중 오류, 자동 종료', e);
                stopAutomation();
                return;
            }

            auto1000Timer = window.setTimeout(loop1000, 4000);
            return;
        }

        console.log('[1000] 관련 버튼을 찾지 못했습니다. 자동 종료');
        stopAutomation();
    }

    // ================================
    // 패치노트 모달 UI
    // ================================
    function openPatchNotesModal() {
        if (document.getElementById('stove-flake-patch-overlay')) {
            return;
        }

        const overlay = document.createElement('div');
        overlay.id = 'stove-flake-patch-overlay';
        overlay.style.position = 'fixed';
        overlay.style.left = '0';
        overlay.style.top = '0';
        overlay.style.right = '0';
        overlay.style.bottom = '0';
        overlay.style.background = 'rgba(0, 0, 0, 0.55)';
        overlay.style.backdropFilter = 'blur(2px)';
        overlay.style.zIndex = '1000000';
        overlay.style.display = 'flex';
        overlay.style.alignItems = 'center';
        overlay.style.justifyContent = 'center';

        const modal = document.createElement('div');
        modal.style.background = 'rgba(15, 15, 15, 0.95)';
        modal.style.color = '#ffffff';
        modal.style.borderRadius = '10px';
        modal.style.padding = '14px 16px 12px 16px';
        modal.style.width = '480px';
        modal.style.maxHeight = '70vh';
        modal.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.6)';
        modal.style.display = 'flex';
        modal.style.flexDirection = 'column';
        modal.style.fontSize = '13px';

        const header = document.createElement('div');
        header.textContent = 'Stove Flake Automation 패치 노트 (v' + SCRIPT_VERSION + ')';
        header.style.fontWeight = 'bold';
        header.style.marginBottom = '8px';
        header.style.fontSize = '14px';

        const content = document.createElement('div');
        content.style.flex = '1';
        content.style.overflowY = 'auto';
        content.style.paddingRight = '4px';

        // 패치내역 전체 렌더링
        PATCH_HISTORY.forEach(function(entry) {
            const section = document.createElement('div');
            section.style.marginBottom = '10px';

            const title = document.createElement('div');
            title.textContent = entry.title || ('v' + entry.version);
            title.style.fontWeight = 'bold';
            title.style.marginBottom = '4px';
            title.style.fontSize = '13px';

            section.appendChild(title);

            if (entry.lines && entry.lines.length > 0) {
                const ul = document.createElement('ul');
                ul.style.paddingLeft = '18px';
                ul.style.margin = '0';

                entry.lines.forEach(function(line) {
                    const li = document.createElement('li');
                    li.textContent = line;
                    li.style.marginBottom = '2px';
                    ul.appendChild(li);
                });

                section.appendChild(ul);
            }

            content.appendChild(section);
        });

        const footer = document.createElement('div');
        footer.style.display = 'flex';
        footer.style.justifyContent = 'flex-end';
        footer.style.marginTop = '8px';

        const closeBtn = document.createElement('button');
        closeBtn.textContent = '닫기';
        closeBtn.style.padding = '6px 12px';
        closeBtn.style.borderRadius = '6px';
        closeBtn.style.border = 'none';
        closeBtn.style.cursor = 'pointer';
        closeBtn.style.fontSize = '12px';
        closeBtn.style.background = '#555';
        closeBtn.style.color = '#fff';

        closeBtn.addEventListener('mouseenter', function() {
            closeBtn.style.background = '#666';
        });
        closeBtn.addEventListener('mouseleave', function() {
            closeBtn.style.background = '#555';
        });
        closeBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            closePatchNotesModal();
        });

        footer.appendChild(closeBtn);

        modal.appendChild(header);
        modal.appendChild(content);
        modal.appendChild(footer);

        // 오버레이 클릭 시 모달 닫기 (모달 내부 클릭은 전파 차단)
        modal.addEventListener('click', function(e) {
            e.stopPropagation();
        });
        overlay.addEventListener('click', function() {
            closePatchNotesModal();
        });

        overlay.appendChild(modal);
        document.body.appendChild(overlay);
    }

    function closePatchNotesModal() {
        const overlay = document.getElementById('stove-flake-patch-overlay');
        if (overlay && overlay.parentNode) {
            overlay.parentNode.removeChild(overlay);
        }
    }

    // ================================
    // 버전 최초 1회만 보여주는 작은 팝업
    // ================================
    function showVersionBannerIfNeeded() {
        const lastSeen = gmGet(VERSION_STORAGE_KEY, null);
        if (lastSeen === SCRIPT_VERSION) {
            return;
        }

        // 현재 버전으로 갱신 (이후 재접속 시에는 다시 뜨지 않음)
        gmSet(VERSION_STORAGE_KEY, SCRIPT_VERSION);

        const entry = getCurrentPatchEntry();

        const banner = document.createElement('div');
        banner.id = 'stove-flake-version-banner';
        banner.style.position = 'fixed';
        banner.style.right = '20px';
        banner.style.bottom = '420px';
        banner.style.width = '260px';
        banner.style.background = 'rgba(0, 0, 0, 0.82)';
        banner.style.color = '#fff';
        banner.style.borderRadius = '8px';
        banner.style.padding = '8px 10px';
        banner.style.fontSize = '12px';
        banner.style.zIndex = '999999';
        banner.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.5)';
        banner.style.cursor = 'pointer';
        banner.style.backdropFilter = 'blur(4px)';

        let html = '';
        html += '<div style="font-weight:bold;margin-bottom:4px;">Stove Flake 패치 안내 (v' +
            SCRIPT_VERSION + ')</div>';

        if (entry && entry.lines && entry.lines.length > 0) {
            html += '<div style="font-size:11px;line-height:1.4;margin-bottom:4px;">';

            entry.lines.forEach(function(line) {
                html += escapeHtml(line) + '<br>';
            });

            html += '</div>';
        } else {
            html += '<div style="font-size:11px;line-height:1.4;margin-bottom:4px;">' +
                '새 버전이 적용되었습니다.' +
                '</div>';
        }

        html += '<div style="font-size:10px;opacity:0.8;">(창을 클릭하면 닫힙니다.)</div>';
        banner.innerHTML = html;

        // 아무 곳이나 클릭하면 종료
        banner.addEventListener('click', function(e) {
            e.stopPropagation();
            const el = document.getElementById('stove-flake-version-banner');
            if (el && el.parentNode) {
                el.parentNode.removeChild(el);
            }
        });

        document.body.appendChild(banner);
    }


    // ================================
    // 자동화 시작 / 중단
    // ================================
    function startAuto100() {
        if (isAuto100Running) {
            alert('이미 100 뽑기 자동화가 진행중입니다.');
            return;
        }
        if (isAuto1000Running) {
            alert('이미 1,000 뽑기 자동화가 진행중입니다. 100 뽑기 자동화를 실행하려면 먼저 중단하기 버튼을 눌러주세요.');
            return;
        }

        const remain = getRemainingDrawsFromPage();
        if (remain === null) {
            alert('오늘 뽑기 횟수를 확인하지 못했습니다. 페이지 구조가 변경되었을 수 있습니다.');
            return;
        }
        if (remain <= 0) {
            alert('오늘은 이미 모두 참여했습니다.\n00시 이후에 다시 시도해주시길 바랍니다.');
            return;
        }

        remainingDraws = remain;
        console.log('[100] 자동화 시작, 남은 횟수: ' + remainingDraws);

        isAuto100Running = true;
        loop100();
    }

    function startAuto1000() {
        if (isAuto1000Running) {
            alert('이미 1,000 뽑기 자동화가 진행중입니다.');
            return;
        }
        if (isAuto100Running) {
            alert('이미 100 뽑기 자동화가 진행중입니다. 1,000 뽑기로 변경하려면 중단하기 버튼을 누르고 다시 시도해주세요.');
            return;
        }

        const remain = getRemainingDrawsFromPage();
        if (remain === null) {
            alert('오늘 뽑기 횟수를 확인하지 못했습니다. 페이지 구조가 변경되었을 수 있습니다.');
            return;
        }
        if (remain <= 0) {
            alert('오늘은 이미 모두 참여했습니다.\n00시 이후에 다시 시도해주시길 바랍니다.');
            return;
        }

        remainingDraws = remain;
        console.log('[1000] 자동화 시작, 남은 횟수: ' + remainingDraws);

        isAuto1000Running = true;
        loop1000();
    }

    function stopAutomation() {
        if (!isAuto100Running && !isAuto1000Running) {
            alert('현재 스크립트가 작동중이지 않습니다.');
        }

        console.log('[중단] 자동화 종료 요청');

        isAuto100Running = false;
        isAuto1000Running = false;

        if (auto100Timer !== null) {
            window.clearTimeout(auto100Timer);
            auto100Timer = null;
        }
        if (auto1000Timer !== null) {
            window.clearTimeout(auto1000Timer);
            auto1000Timer = null;
        }

        remainingDraws = null;

        // 팝업 닫기 딜레이 1초
        window.setTimeout(function() {
            const closeBtn = findPopupCloseButton();
            if (!closeBtn) {
                console.log('[중단] 팝업 닫기 버튼을 찾지 못했습니다.');
                return;
            }
            try {
                closeBtn.click();
                console.log('[중단] 팝업 닫기 버튼 클릭');
            } catch (e) {
                console.log('[중단] 팝업 닫기 버튼 클릭 중 오류', e);
            }
        }, 1000);
    }

    // ================================
    // UI: 자동화 버튼 + 툴팁
    // ================================
    function createButtonWithTooltip(options) {
        const id = options.id;
        const label = options.label;
        const bottom = options.bottom;
        const onClick = options.onClick;
        const background = options.background;
        const tooltip = options.tooltip;

        if (document.getElementById(id)) {
            return;
        }

        const container = document.createElement('div');
        container.style.position = 'fixed';
        container.style.right = '20px';
        container.style.bottom = bottom + 'px';
        container.style.zIndex = '999999';
        container.style.display = 'flex';
        container.style.alignItems = 'center';
        container.style.gap = '6px';

        const icon = document.createElement('div');
        icon.textContent = '?';
        icon.style.width = '18px';
        icon.style.height = '18px';
        icon.style.borderRadius = '50%';
        icon.style.background = '#555';
        icon.style.color = '#fff';
        icon.style.display = 'flex';
        icon.style.alignItems = 'center';
        icon.style.justifyContent = 'center';
        icon.style.fontSize = '12px';
        icon.style.cursor = 'default';
        icon.style.opacity = '0.85';

        const tooltipBox = document.createElement('div');
        tooltipBox.textContent = tooltip;
        tooltipBox.style.position = 'absolute';
        tooltipBox.style.right = '110%';
        tooltipBox.style.top = '50%';
        tooltipBox.style.transform = 'translateY(-50%)';
        tooltipBox.style.background = '#333';
        tooltipBox.style.color = '#fff';
        tooltipBox.style.padding = '6px 10px';
        tooltipBox.style.borderRadius = '6px';
        tooltipBox.style.whiteSpace = 'nowrap';
        tooltipBox.style.fontSize = '12px';
        tooltipBox.style.opacity = '0';
        tooltipBox.style.pointerEvents = 'none';
        tooltipBox.style.transition = 'opacity 0.1s ease';

        icon.addEventListener('mouseenter', function() {
            tooltipBox.style.opacity = '1';
        });
        icon.addEventListener('mouseleave', function() {
            tooltipBox.style.opacity = '0';
        });

        const btn = document.createElement('button');
        btn.id = id;
        btn.textContent = label;
        btn.style.padding = '10px 12px';
        btn.style.borderRadius = '6px';
        btn.style.border = 'none';
        btn.style.cursor = 'pointer';
        btn.style.fontSize = '12px';
        btn.style.fontFamily = 'inherit';
        btn.style.color = '#ffffff';
        btn.style.background = background || '#ff6b00';
        btn.style.boxShadow = '0 2px 6px rgba(0, 0, 0, 0.3)';
        btn.style.opacity = '0.9';
        btn.style.width = '190px';
        btn.style.textAlign = 'center';

        btn.addEventListener('mouseenter', function() {
            btn.style.opacity = '1';
        });
        btn.addEventListener('mouseleave', function() {
            btn.style.opacity = '0.9';
        });
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            onClick();
        });

        container.appendChild(icon);
        container.appendChild(btn);
        container.appendChild(tooltipBox);
        document.body.appendChild(container);
    }

    function initUIButtons() {
        // 버튼 위치를 조금 위로 올려서 패치노트 버튼을 맨 아래에 배치
        createButtonWithTooltip({
            id: 'stove-auto-100',
            label: '100 뽑기 자동화 시작하기',
            bottom: 140,
            background: '#ff6b00',
            onClick: startAuto100,
            tooltip: '오늘 뽑기 남은 횟수만큼 100 뽑기를 자동으로 진행합니다.'
        });

        createButtonWithTooltip({
            id: 'stove-auto-1000',
            label: '1,000 뽑기 자동화 시작하기',
            bottom: 100,
            background: '#ff6b00',
            onClick: startAuto1000,
            tooltip: '오늘 뽑기 남은 횟수만큼 1,000 뽑기를 자동으로 진행합니다.'
        });

        createButtonWithTooltip({
            id: 'stove-auto-stop',
            label: '중단하기',
            bottom: 60,
            background: '#d62828',
            onClick: stopAutomation,
            tooltip: '진행 중인 자동화를 중단하고, 팝업이 있다면 닫기 버튼을 누릅니다.'
        });

        // ✅ 패치노트 버튼 (초록색)
        createButtonWithTooltip({
            id: 'stove-patch-notes',
            label: '패치노트',
            bottom: 20,
            background: '#2f9e44',
            onClick: openPatchNotesModal,
            tooltip: '버전별 패치 내역을 확인합니다.'
        });
    }

    // ================================
    // 초기화
    // ================================
    function onReady() {
        resolveAccountId(function() {
            initRewardState();
            initUIButtons();
            renderRewardPanel();
            setupPopupObserver();
            scanAllRewardPanels();
            // 버전 최초 1회 팝업
            showVersionBannerIfNeeded();
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', onReady);
    } else {
        onReady();
    }

})();
